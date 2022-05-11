import { useState,useEffect } from "react"
import axios from "axios"


const api = axios.create({
    baseURL:'https://api.jikan.moe/v4/'
})

export function useFetch<T = unknown>(url : string){
    const [data, setData] = useState<T | null>(null)
    const [isFacthing, setIsFetching] = useState(true)

    useEffect(()=>{

        api.get(url)
        .then(response => setData(response.data.data))
        .finally(()=>{
            setIsFetching(false);
        })
    },[url])

    return {data ,isFacthing}
}