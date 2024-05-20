import React, { FC, useState } from 'react';
import * as S from './styles';

import MyModal from '../Modal';

export type CardProps = {
  image: string;
  title: string;
  content: string;
  modal: {
    presentIn: string
  }
  
};

const Card: FC<CardProps> = ({ image, title, content, modal }) => {
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

      <MyModal 
          open={open}
          onClose={handleClose}
          image={image}
          title={title}
          content={modal.presentIn}
          rating='★★★★★★'
        />

    </>
  );
};

export default Card;
