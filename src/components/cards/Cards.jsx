import { useState } from "react"
import { useEffect } from "react"
import { getList } from "../../assets/api/api"
import { CardContainer, Grid } from "./CardsStyle"

export function Cards(){
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        getList(setMovies)
    },[])
    return(
        <Grid>
            {movies.map((item)=>{
                return(
                    <CardContainer key={item.id} id={item.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                            alt={"Poster"}
                            id={item.id}
                        />
                        <div className="infoContainer">
                            <h4>Título: {item.title}</h4>
                            <h4>Nota: {item.vote_average}</h4>
                        </div>
                    </CardContainer>
                )
            })}
        </Grid>
    )
}