import {useParams } from 'react-router-dom'
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { useFetch } from '../../shared/Hooks/useFatch';
import { appfirebase } from '../../services/firebaseConfig';
import { useAuth } from '../../shared/Hooks/useAuth';
import { ApiAnim } from './typeAnim';
import { useState } from 'react';

import { Play, Flash,FlashOff } from '@styled-icons/ionicons-outline';


export default function Main(){
    const [add, setAdd] = useState<Boolean>(true)
    const {IdAnime} = useParams()
    const {data} = useFetch<ApiAnim>(`anime/${IdAnime}`)
    const {currentUser} = useAuth();
    const db = getFirestore(appfirebase);

console.log(data)
    async function saveInFavorite(){       
            await setDoc(doc(db, `${currentUser?.name}`,`${data?.title}`), {
                    id: data?.mal_id,
                    title: data?.title,
                    url: data?.images.jpg.image_url
                })
            .catch((error)=>{console.log(error)})
            .finally(()=>{
                alert("Adicionado")
                //!add ? setAdd(true) : setAdd(false)
                // Arrumar o codigo parar alterar
            })   
            
   }
    
    return(
        <div>        
            {!data ? 
                <div className='w-full h-screen py-52 text-center animate-pulse'>
                    <em className=' text-white'>Loading Anime . . .</em> 
                </div> 
                :
                <main>
                    <section className='flex flex-row justify-between  p-6 pt-12 mx-24'>
                        <div className='text-slate-100'>
                            <h1 className='text-2xl font-medium mb-4'>{data?.title}</h1>
                            <p className='text-lg ml-2 mb-2'>Episodes: <span className=' underline underline-offset-4 decoration-amber-600 '>{data.episodes === null ? 0 : data.episodes}</span></p>
                            <p className='text-lg ml-2 mb-2'>Score: <span className=' underline underline-offset-4 decoration-amber-600 '>{data?.members}</span></p> 
                            <p className='text-lg ml-2 mb-2'>Favotiro: <span className=' underline underline-offset-4 decoration-amber-600 '>{data?.favorites}</span></p>
                            <p className='text-lg ml-2 mb-2'>Year: <span className=' underline underline-offset-4 decoration-amber-600 '>{data?.year}</span></p>
                            <p className='text-lg ml-2 mb-2'>Status: <span className=' underline underline-offset-4 decoration-amber-600 '>{data?.status}</span></p>
                            <p className='text-lg ml-2 mb-2'>Rating: <span className=' underline underline-offset-4 decoration-amber-600 '>{data?.rating}</span></p>

                            <p className='text-lg ml-2 mb-2'>Generos: {data?.genres.map((item : any ) => <span key={item.name} className='mr-2 underline underline-offset-4 decoration-amber-600 '>{item.name}</span>)}
                            </p>
                            {add ?

                                <button onClick={saveInFavorite}
                                className='bg-amber-600 px-2 py-1 rounded-lg shadow-md shadow-slate-400/40'
                                > Favorite
                                <Flash className='w-5 text-red-700'/>
                            </button>
                            :
                            <button onClick={saveInFavorite}
                                className='bg-amber-600 px-2 py-1 rounded-lg shadow-md shadow-slate-400/40'
                                > Disfavor
                                <FlashOff className='w-5 text-red-700'/>
                            </button>
                            }
                        </div>
                        <div className='text-slate-100'>
                            <p className='text-center border-x-4 rounded-lg my-2'>Views: <span>{data?.members}</span></p> 
                            <img className='w-64' src={data?.images.jpg.image_url} alt={data?.title} />
                        </div>
                    </section>
                    <section className='flex flex-col '>  
                            
                            { data?.trailer.embed_url == null ? 
                                <div className='w-full py-40 text-center animate-pulse flex flex-col'>
                                    <em className=' text-white'>Anime without trailer.</em> 
                                    <Play className='w-6 mx-auto mb-4 animate-pulse text-slate-100 '/>
                                </div> 
                            :
                            <>
                                <Play className='w-6 mx-auto mb-4 animate-pulse text-slate-100 '/>

                                    <iframe className='m-auto'
                                    width="720" height="405" 
                                    src={data?.trailer.embed_url} 
                                    title="YouTube video player"  
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
                                </iframe>
                                <h1 className='text-center font-semibold text-lg text-slate-400'>Trailer</h1>                      
                            </>
                            }
                        
                    </section>
                </main>
            }
        </div>
    )
}