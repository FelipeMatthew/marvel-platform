import * as S from './styles'

import { FC } from 'react'

export type CardProps = {
  image: string,
  title: string,
  content: string
}

const Card: FC<CardProps> = ({ image, title, content}) => {
  return (
    <S.Container imageUrl={image}>

      <S.ContentContainer>     
          <h1>{title}</h1>
          <S.Content>{content}</S.Content>
        <S.Details>Ver detalhes</S.Details> 
      </S.ContentContainer>

    </S.Container>
  )
}

export default Card;