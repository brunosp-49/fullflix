import { Footer } from "../../components/footer/Footer";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Grid, MainContainer, RigthSide } from "./DetailStyle";
import { Header } from "../../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { goToIndex } from "../../assets/redux/counterSlice";
import { Loading } from "../../components/loading/Loading";

export default function Details() {
  const state = useSelector((state) => state.page.value2);
  const dispatch = useDispatch();
  const { id } = useParams();

  return (
    <MainContainer>
      <Header />
      <Grid>
        <img
          src={`https://image.tmdb.org/t/p/w500/${state.data.poster_path}`}
          alt=""
        />
        <RigthSide>
          <p>
            <b>Titulo:</b> {state.data.title}
          </p>
          <p>
            <b>Sinopse:</b> {state.data.overview}
          </p>
          <p>
            <b>Data de lançamento:</b> {state.data.release_date}
          </p>
          <p>
            <b>Nota:</b> {state.data.vote_average}
          </p>
          <Link to="/" onClick={() => dispatch(goToIndex())}>
            Voltar para a home
          </Link>
        </RigthSide>
      </Grid>
      <Footer text="Detalhes" />
    </MainContainer>
  );
}
