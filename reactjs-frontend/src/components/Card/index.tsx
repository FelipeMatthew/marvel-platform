import * as S from './styles'

import { FC, useState } from 'react'

export type CardProps = {
  image: string,
  title: string,
  content: string
}

const Card: FC<CardProps> = ({ image, title, content}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      {/* Card */}
      <S.Container imageUrl={image} onClick={openModal}>
        <S.ContentContainer>     
            <h1>{title}</h1>
            <S.Content>{content}</S.Content>
          <S.Details>Ver detalhes</S.Details> 
        </S.ContentContainer>
      </S.Container>

      {/* Modal */}
    </>
  )
}

export default Card;