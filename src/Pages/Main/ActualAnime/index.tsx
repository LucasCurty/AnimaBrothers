import {useParams } from 'react-router-dom'


import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { useFetch } from '../../../Hooks/useFatch';
import { appfirebase } from '../../../Services/firebaseConfig';
import { useAuth } from '../../../Hooks/useAuth';
import { ApiAnim } from '../typeAnim';
import * as styled from './styled'
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

export default function Main(){
    const {animeId} = useParams<string>()
    const {data} = useFetch<ApiAnim | any>(`anime/${animeId}`)
    const {currentUser} = useAuth();
    const db = getFirestore(appfirebase);

console.log(data)
    function saveInFavorite(){
       
            setDoc(doc(db, `${currentUser?.name}`,`${data?.title}`), {
                anime:{
                    title: data?.title,
                    url: data?.images.jpg.image_url,
                    id: data?.mal_id
                }
            })
            .catch((error)=>{console.log(error)})
            .finally(()=>{alert('Adicionado')})   
            
   }
    
    return(
        <div>
        
            {!data ? 
                <p style={{textAlign:"center"}}>Carregando...</p> 
                :
                <styled.SectionAnime>
                    <h1>{data?.title}</h1>
                    <styled.DivImg>
                        <img src={data?.images.jpg.image_url} alt={data?.title} />
                        {
                            currentUser?.isLoged ?
                            <button onClick={saveInFavorite}>
                                <styled.IconHeart />
                            </button>
                        : 
                        ""
                        }
                    </styled.DivImg>            
                    
                    <styled.DivInfo>
                        <p>Episodeos: <span>{data.episodes}</span></p>
                        <p>Score:<span>{data?.score}</span></p> 
                        <p>Favotiro:<span>{data?.favorites}</span></p>
                        <p>Generos:{data?.genres.map((item: { mal_id: number, name: string;}) => <span key={item.mal_id}>{item.name}</span>)
                        }</p>
                    </styled.DivInfo>

                    <styled.DivAbout>
                        {data?.synopsis}
                    </styled.DivAbout>
                </styled.SectionAnime>
            }
        </div>
    )
}