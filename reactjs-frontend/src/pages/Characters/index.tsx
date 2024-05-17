import Card from "../../components/Card";
import Header from "../../components/Header";
import { hulkCard, spiderManCard, thanosCard, wandaCard } from "./data";


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as S from './styles'

const CharactersPage = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Header currentPage="/characters"/>
        <S.CarouselContainer>
          <Slider {...settings}>
            <Card {...wandaCard}/>
            <Card {...spiderManCard}/>
            <Card {...thanosCard}/>
            <Card {...hulkCard}/>
            <Card {...wandaCard}/>
            <Card {...hulkCard}/>
            <Card {...thanosCard}/>
          </Slider>
      </S.CarouselContainer>
    </div>
  )
}

export default CharactersPage;