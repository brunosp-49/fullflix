import { Cards } from "../../components/cards/Cards";
import { Footer } from "../../components/footer/Footer";
import { HomePai, Part1, Part2 } from "./HomeStyle";

export default function Home() {
  return (
    <HomePai>
      <Part1 />
      <Part2>
        <p>Filmes Populares</p>
      </Part2>
      <div className="alignDiv">
        <Cards />
      </div>
      <Footer text="Home" />
    </HomePai>
  );
}
