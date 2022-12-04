import { getFirestore, collection,getDocs, DocumentData, doc, deleteDoc} from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { useAuth } from '../../../shared/Hooks/useAuth';
import { appfirebase } from '../../../services/firebaseConfig';
import {Trash} from '@styled-icons/ionicons-outline'

type AnimeType = { 
    id: number;
    title: string;
    url: string;
}

export default function Meusfavoritos(){

    const db = getFirestore(appfirebase);
    const {currentUser} = useAuth();
    const [ myFavorites, setMyFavorites] = useState<AnimeType[] | DocumentData[]>()

 async function getUsers(){    
    if(currentUser?.isLogged){
        const docRef = await getDocs(collection(db, `${currentUser?.name}`));
        setMyFavorites(docRef.docs.map((doc)=>({...doc.data()})));
    }else{
       console.log('User not connected')
    }
}

async function Delete(title : string) {
   await deleteDoc(doc(db, `${currentUser?.name}`, title))
    getUsers()
}

useEffect( ()=>{getUsers();},[currentUser?.isLogged])

    return(
        <section>
               
            <ul className='flex flex-wrap justify-center gap-x-6'>
            {(!currentUser?.isLogged) ?
                <span style={{
                    color: 'white',
                    padding: '2rem'
                }}>Please, enter your count or add an anime</span>
            :
                myFavorites?.map(item => { 
                    return(
                        <li key={item.title} className='relative w-52'>
                            <a href={`actualanime/${item.id}`} className='text-center'>
                                <h1 className='text-slate-200 mb-1 text-mg font-semibold max-w-xs truncate'>{item.title}</h1>
                                <img src={item.url} alt={item.title} className='w-52 m-auto max-h-72 rounded'/> 
                            </a>
                                <button onClick={()=> Delete(item.title)} className=' absolute  p-1 bottom-4 right-1 bg-amber-400 rounded hover:bg-amber-600 hover:text-white'>
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
