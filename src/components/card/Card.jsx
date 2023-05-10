import { MainContainer } from "./CardStyle";
import { getDetail } from "../../api/api";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovieInfo } from "../../redux/fullflixSlice";

export const Card = ({ movie }) => {
  const [movieDetail, setMovieDetail] = useState()
  const dispatch = useDispatch()

  const onHoverDetail = async(e) =>{
    getDetail(e.target.id, setMovieDetail) 
  }

  useEffect(()=>{
    dispatch(getMovieInfo(movieDetail))
  },[movieDetail])

  return (
    <MainContainer to={"/detail"} onMouseEnter={onHoverDetail} id={movie.id}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        id={movie.id}
      />
      <div className="infoContainer" id={movie.id}>
        <h4>Titulo: {movie.title}</h4>
        <h4>Notal: {movie.vote_average}</h4>
      </div>
    </MainContainer>
  );
};
