import { useState } from "react"
import { useEffect } from "react"
import { getList } from "../assets/api/api"

export function Cards(){
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        setTimeout(()=>getList(setMovies), 5000) 
    },[])
    return(
        <div>
            {movies.map((item)=>{
                return(
                    <h1>{item.title}</h1>
                )
            })}
        </div>
    )
}