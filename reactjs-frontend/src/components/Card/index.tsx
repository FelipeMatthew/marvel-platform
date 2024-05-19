import React, { FC, useState } from 'react';
import * as S from './styles';
import Modal from '../Modal';

export type CardProps = {
  image: string;
  title: string;
  content: string;
};

const Card: FC<CardProps> = ({ image, title, content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <S.Container imageUrl={image} onClick={openModal}>
        <S.ContentContainer>
          <h1>{title}</h1>
          <S.Content>{content}</S.Content>
          <S.Details>Ver detalhes</S.Details>
        </S.ContentContainer>
      </S.Container>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h1>{title}</h1>
        <p>{content}</p>
      </Modal>
    </>
  );
};

export default Card;
