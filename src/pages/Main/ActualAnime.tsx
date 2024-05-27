import {useParams } from 'react-router-dom'
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { useFetch } from '../../shared/Hooks/useFatch';
import { appfirebase } from '../../services/firebaseConfig';
import { useAuth } from '../../shared/Hooks/useAuth';
import { ApiAnim } from './typeAnim';
import { Play } from '@styled-icons/ionicons-outline';


export default function Main(){
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
   const backgroundImageUrl = data?.images.jpg.large_image_url
   console.log(data)

    return(
        <div className='pt-10'>  
              
            {!data ? 
                <div className='w-full h-screen py-52 text-center animate-pulse'>
                    <em className=' text-white'>Carregando Anime . . .</em> 
                </div> 
                :
                <main className='flex flex-col items-center justify-items-center'>
                    <div className='w-screen h-80 mt-12 bg-whit justify-items-center relative bg-cover bg-center bg-no-repeat opacity-25 blur' style={{ backgroundImage: `url(${backgroundImageUrl})`}}></div>
                    <img className='h-1/4 absolute z-40 top-20' src={data?.images.jpg.image_url} alt={data?.title} /> 

                    <section className='text-white flex '>
                        <div className='w-3/5'>

                            <h1 className='text-2xl font-medium mb- pt-6'>{data?.title}</h1>
                            <p className='text-lg ml-2 mb-2'>Episodes: <span className=' underline underline-offset-4 decoration-amber-600 '>{data.episodes === null ? 0 : data.episodes}</span></p>
                            <p className='text-lg ml-2 mb-2'>Score: <span className=' underline underline-offset-4 decoration-amber-600 '>{data?.members}</span></p> 
                            <p className='text-lg ml-2 mb-2'>Favotiro: <span className=' underline underline-offset-4 decoration-amber-600 '>{data?.favorites}</span></p>
                            <p className='text-lg ml-2 mb-2'>Year: <span className=' underline underline-offset-4 decoration-amber-600 '>{data?.year}</span></p>
                            <p className='text-lg ml-2 mb-2'>Status: <span className=' underline underline-offset-4 decoration-amber-600 '>{data?.status}</span></p>
                            <p className='text-lg ml-2 mb-2'>Rating: <span className=' underline underline-offset-4 decoration-amber-600 '>{data?.rating}</span></p>

                            <p className='text-lg ml-2 mb-2'>Generos: {data?.genres.map((item : any ) => <span key={item.name} className='mr-2 underline underline-offset-4 decoration-amber-600 '>{item.name}</span>)}
                            </p>
                        </div>
                        
                        <div className='flex flex-col w-2/5 '>  
                            { data?.trailer.embed_url == null ? 
                                <div className='w-full py-40 text-center animate-pulse flex flex-col'>
                                    <em className=' text-white'>Anime sem trailer.</em> 
                                    <Play className='w-6 mx-auto mb-4 animate-pulse text-slate-100 '/>
                                </div> 
                            :
                            <>
                                <iframe className=''
                                    width="480" height="405" 
                                    src={data?.trailer.embed_url} 
                                    title="YouTube video player"  
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
                                </iframe>                    
                            </>
                            }
                        </div>
                    </section>
                </main>
            }
        </div>
    )
}