import { getFirestore, collection,getDocs, DocumentData, doc, deleteDoc} from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { useAuth } from '../../../shared/Hooks/useAuth';
import { appfirebase } from '../../../services/firebaseConfig';
import {Trash} from '@styled-icons/ionicons-outline'

type listFavorite = {
        id: string;
        title: string;
        url:string;
}
export default function Meusfavoritos(){

    const db = getFirestore(appfirebase);
    const {currentUser} = useAuth();
    const [ myFavorites, setMyFavorites] = useState<listFavorite[] | DocumentData[]>()

 async function getUsers(){    
    if(currentUser){
        const data = await getDocs(collection(db, `${currentUser?.name}`));
        setMyFavorites(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
    }else{
        console.log('User not conected')
    }
}


async function Delete(id : string) {
    const docAnim = doc(db, `${currentUser?.name}`, id )
    await deleteDoc(docAnim)
    getUsers()
}

useEffect( ()=>{
        getUsers() 
        console.log(myFavorites)
},[currentUser?.isLogged])

    return(
        <section>
               
            <ul className='flex flex-wrap justify-center gap-x-6'>
            {(currentUser?.isLogged === false) ?
                <span style={{
                    color: 'white',
                    padding: '2rem'
                }}>Please, enter your count or add an anime</span>
            :
                myFavorites?.map(item => { 
                    return(
                        <li key={item.id} className='relative'>
                            <a href={`/actualanime/${item.id}`} className='text-center'>
                                <h1 className='text-slate-200 mb-1 text-mg font-semibold'>{item.title}</h1>
                                <img src={item.url} alt={item.id} className='w-52 max-h-72 rounded'/> 
                            </a>
                                <button onClick={()=> Delete(item.id)} className=' absolute  p-1 bottom-4 right-1 bg-amber-400 rounded hover:bg-amber-600 hover:text-white'>
                                    <Trash className='w-5 '/>
                                </button>
                        </li>
                    )
                })
                }
            </ul>
            
        </section>
    )
}