import Card from "../../components/Card";
import Header from "../../components/Header";
import { hulkCard, spiderManCard, thanosCard, wandaCard } from "./data";

import * as S from './styles'

const CharactersPage = () => {

  return (
    <div>
      <Header currentPage="/characters"/>
      <S.CarouselContainer>
        <Card {...wandaCard}/>
        <Card {...spiderManCard}/>
        <Card {...thanosCard}/>
        <Card {...hulkCard}/>
      </S.CarouselContainer>
    </div>
  )
}

export default CharactersPage;