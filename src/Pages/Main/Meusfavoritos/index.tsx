import { getFirestore, collection,getDocs, DocumentData, doc, deleteDoc} from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { useAuth } from '../../../Hooks/useAuth';
import { appfirebase } from '../../../Services/firebaseConfig';

import * as styled from './styled'

type listaFavorite = {
    anime:{
        id: number;
        title: string;
        url:string;
        }
    id:string;
}
export default function Meusfavoritos(){

    const db = getFirestore(appfirebase);
    const {currentUser} = useAuth();
    const [ myFavorites, setMyFavorites] = useState<listaFavorite[] | DocumentData[]>()

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

useEffect( ()=>{getUsers();},[currentUser?.isLoged])

    return(
        <styled.Section>
               
            <ul>
            {(currentUser?.isLoged == false) ?
                <span style={{
                    color: 'white',
                    padding: '2rem'
                }}>Conecte com sua conta ou adicione um anime aos favoritos</span>
            :
                myFavorites?.map(item => { 
                    return(
                        <li key={item.id}>
                            <a href={`/actualanime/${item.anime.id}`}>
                                <p>{item.anime.title}</p>
                                <img src={item.anime.url} alt={item.id} /> 
                            </a>
                                <button onClick={()=> Delete(item.id)}><styled.Icon/></button>
                        </li>
                    )
                })
                }
            </ul>
            
        </styled.Section>
    )
}