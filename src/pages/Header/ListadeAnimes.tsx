import { SetStateAction, useState } from 'react'

import { useFetch } from '../../shared/Hooks/useFatch';
 import {Search} from '@styled-icons/ionicons-outline'

import useDebounce from '../../shared/Hooks/useDebounce';

// Object type
import {ApiAnim} from '../Main/typeAnim'

export default function ListadeAnimes(){
    const [animeName, setAnimeName] = useState<string>('')

    const {data , isFetching} = useFetch<ApiAnim[]>(`anime?q=${animeName}`)


    function handleChange(e: { target: { value: SetStateAction<string>; }; }){
        setAnimeName(e.target.value)
    }
    const debounced = useDebounce(handleChange, 500)

    return(
        <section className='container text-center'>
            <form>
                <input
                    placeholder={`Enter your anime name...`}  
                    onChange={debounced}
                    className='rounded-lg px-2 py-1'
                />
                <Search className='w-10 p-1 text-amber-600 animate-pulse'/>
            </form>
            <div>
                { isFetching ? 
                    <div className='animate-pulse col-start-2 col-end-4 text-center py-60'>
                        <em className=' text-white'>Loading Animes . . .</em> 
                    </div>
                :   
                    <div className='grid grid-cols-4 gap-2  justify-items-center' >   

                        {data?.map((item,index)=>{
                            return(
                                <a key={index} href={`/actualanime/${item.mal_id}`}
                                    className='p-1 '
                                >
                                    <h1 className='text-center text-white pb-1'>{item.title}</h1>
                                    <img className='max-w-225 max-h-80 rounded hover:shadow-amber-400/30 hover:shadow-xl' 
                                    src={item.images.jpg.image_url} 
                                    alt={item.title} />
                                </a>
                                )
                        })}                
                    
                    </div>
                }
            </div>
        </section>
    )
}