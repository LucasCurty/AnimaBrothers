import { useState } from 'react'

import { useFetch } from '../../../Hooks/useFatch';
// import SearchInput from './components/SearchInput'

import useDebounce from '../../../Hooks/useDebounce';
// style of page
import * as styled from './styled'

type Geners = {
    mal_id: number;
    title:string;
    images:{
        jpg:{
            large_image_url:string
        }
    }
    
}

export default function ListadeAnimes(){
    const [animeName, setAnimeName] = useState<string>('')

    const {data , isFacthing} = useFetch<Geners[]>(`anime?q=${animeName}`)


    function handleChange(e : any){
        setAnimeName(e.target.value)
    }
    const debounced = useDebounce(handleChange, 500)

    return(
        <styled.SectionList>
            <styled.Form>
                <p>Lista de animes</p>
                <input
                    placeholder='Digite um anime '
                    onChange={debounced}
                />
            </styled.Form>
            <styled.DivListAnim>
                {isFacthing ? <p style={{paddingTop:"1rem"}}>Carregando...</p> 
                :   <div>
                        {data?.map((item,index)=>{
                            return(
                                <styled.DivAnim key={index}>                               
                                    <a href={`/actualanime/${item.mal_id}`}>
                                    <h1>{item.title}</h1>
                                    <img src={item.images.jpg.large_image_url} 
                                    alt={item.title} />
                                    </a>
                                </styled.DivAnim>
                                )
                            })}                
                    </div>
                }
            </styled.DivListAnim>
        </styled.SectionList>
    )
}