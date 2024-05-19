import React, { FC, useState } from 'react';
import * as S from './styles';
import Modal from '../Modal';
import CustomModal from '../Modal';

export type CardProps = {
  image: string;
  title: string;
  content: string;
};

const Card: FC<CardProps> = ({ image, title, content }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <S.Container imageUrl={image} onClick={handleOpen}>
        <S.ContentContainer>
          <h1>{title}</h1>
          <S.Content>{content}</S.Content>
          <S.Details>Ver detalhes</S.Details>
        </S.ContentContainer>
      </S.Container>

      <CustomModal 
          open={open}
          onClose={handleClose}
        />
    </>
  );
};

export default Card;
