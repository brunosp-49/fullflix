import { Footer } from "../../components/footer/Footer";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, MainContainer, RigthSide } from "./DetailStyle";
import { Header } from "../../components/header/Header";

export  default function Details() {

  return  (
    <MainContainer>
      <Header/>
      <Grid>
        <img src={`https://image.tmdb.org/t/p/w500/`} alt="" onClick={()=>{console.log()}}/>
        <RigthSide>
          <p><b>Titulo:</b> </p>
          <p><b>Sinopse:</b> </p>
          <p><b>Data de lançamento:</b></p>
          <p><b>Nota:</b> </p>
          <Link to="/" onClick={()=>{}}>Voltar para a home</Link>
        </RigthSide>
      </Grid>
      <Footer text="Detalhes"/>
      </MainContainer>
      );
}
