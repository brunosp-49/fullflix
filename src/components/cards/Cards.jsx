import { useState } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getList, getDetails } from "../../assets/api/api"
import { getMovieDetails } from "../../assets/redux/counterSlice"
import { CardContainer, Grid } from "./CardsStyle"

export function Cards(){
    const [movies, setMovies] = useState([])
    const [movieDetails, setMovieDetails] = useState()
    const dispatch = useDispatch();

    useEffect(()=>{
        getList(setMovies)
    },[])

    useEffect(()=>{
       dispatch(getMovieDetails(movieDetails))
    },[movieDetails])

    const onHoverDetail = async(e) => {
       await getDetails(e.target.id, setMovieDetails)
    }

    return(
        <Grid>
            {movies.map((item)=>{
                return(
                    <CardContainer key={item.id} id={item.id} onMouseEnter={onHoverDetail}>
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