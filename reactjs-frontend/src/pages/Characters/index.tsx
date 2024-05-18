import Card from "../../components/Card";
import Header from "../../components/Header";
import { hulkCard, spiderManCard, thanosCard, wandaCard } from "./data";
import * as S from './styles';
import Carousel from "../../components/Carousel";

const CharactersPage = () => {

  return (
    <S.Container>
      <Header currentPage="/characters" />
          <Carousel>
            <Card {...wandaCard} />
            <Card {...hulkCard} />
            <Card {...spiderManCard} />
            <Card {...thanosCard} />
          </Carousel>
    </S.Container>
  );
}

export default CharactersPage;