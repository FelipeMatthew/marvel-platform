import { FC, ReactElement,  } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./config";

import * as S from './styles'

type CarouselProps = {
  children: ReactElement |  ReactElement[]
}

const Carousel: FC<CarouselProps> = ({ children }) => {

  return (
    <S.Container>
      <Slider {...settings}>
        {children}
      </Slider>
    </S.Container>
  )
}

export default Carousel;