import Header from "../../components/Header";

import { Splide, SplideSlide } from '@splidejs/react-splide';

import wandaPicture from '../../assets/images/characters/wanda.jpeg'
import * as S from './styles'

const CharactersPage = () => {


  return (
    <div>
      <Header currentPage="/characters"/>
      <S.CarouselContainer>
        <Splide
          options={ {
            rewind: true,
            gap   : '1rem',
          } }
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <img src={wandaPicture} alt="Image 1"/>
          </SplideSlide>
          <SplideSlide>
            <img src={wandaPicture} alt="Image 2"/>
          </SplideSlide>
          <SplideSlide>
            <img src={wandaPicture} alt="Image 3"/>
          </SplideSlide>
        </Splide>
      </S.CarouselContainer>
    </div>
  )
}

export default CharactersPage;