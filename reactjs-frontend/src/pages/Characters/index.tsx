import Card from "../../components/Card";
import Header from "../../components/Header";
import { hulkCard, spiderManCard, thanosCard, wandaCard } from "./data";
import Carousel from "../../components/Carousel";

const CharactersPage = () => {

  return (
    <>
      <Header currentPage="/characters" />
      <Carousel>
        <Card {...wandaCard} />
        <Card {...hulkCard} />
        <Card {...spiderManCard} />
        <Card {...thanosCard} />
      </Carousel>
    </>
  );
}

export default CharactersPage;