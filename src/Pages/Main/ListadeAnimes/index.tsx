import { useState } from 'react'

import { useFetch } from '../../../shared/Hooks/useFatch';
// import SearchInput from './components/SearchInput'

import useDebounce from '../../../shared/Hooks/useDebounce';

// Object type
import {ApiAnim} from '../typeAnim'

export default function ListadeAnimes(){
    const [animeName, setAnimeName] = useState<string>('')

    const {data , isFetching} = useFetch<ApiAnim>(`anime?q=${animeName}`)


    function handleChange(e : any){
        setAnimeName(e.target.value)
    }
    const debounced = useDebounce(handleChange, 500)

    return(
        <section>
            <form>
                <input
                    placeholder='Type the name of the anime...'
                    onChange={debounced}
                />
            </form>
            <div className='grid grid-cols-4 gap-2 '>
                { isFetching ? <p style={{paddingTop:"1rem"}}>Loading...</p> 
                :   
                    <>
                        {data?.map((item,index)=>{
                            return(
                                <div key={index} className='w-fit m-x-full hover:shadow-xl' >                               
                                    <a  href={`/actualanime/${item}`}
                                        
                                    >
                                    <h1 className='text-center text-white'>{item.title}</h1>
                                    <img className='m-auto' src={item.images.jpg.image_url} 
                                    alt={item.title} />
                                    </a>
                                </div>
                                )
                            })}                
                    </>
                  
                
                }
            </div>
        </section>
    )
}