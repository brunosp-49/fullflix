import { useEffect, useState } from "react";
import { getList } from "../../api/api";
import { Card } from "../../components/card/Card";
import { Footer } from "../../components/footer/Footer";
import { Grid, MainContainer, Part1, Part2 } from "./HomeStyle";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getList(setMovies);
  }, []);

  return (
    <MainContainer>
      <Part1 />
      <Part2>
        <p>Filmes Populares</p>
      </Part2>
      <Grid>
        {movies.map((movie) => {
          return <Card movie={movie} />;
        })}
      </Grid>
      <Footer text="Home Footer" />
    </MainContainer>
  );
}

export default Home;
