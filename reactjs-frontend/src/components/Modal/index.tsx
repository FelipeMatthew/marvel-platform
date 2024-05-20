// src/components/CustomModal.tsx
import { FC } from 'react';
import { Modal} from '@mui/material';

import * as S from './styles'
import { IoMdCloseCircleOutline } from 'react-icons/io';

type CustomModalProps = {
  onClose: () => void;
  open: boolean;
  image: string;
  title: string;
  content: string;
  available?: string;
  rating: string;
};

const MyModal: FC<CustomModalProps> = ({ ...props }) => {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <S.StyledBox>
            <S.Img src={props.image} alt="" />

            <S.ContentContainer>
              <h1>{props.title}</h1>
              <p>{props.content}</p>
              
              <div>
                { props.available ? <p>{props.available}</p> : ''}
              
                <h3>Avaliação</h3>
                <p>{props.rating}</p>
              </div>
            </S.ContentContainer>
          <IoMdCloseCircleOutline 
          size={45}
          onClick={props.onClose}
          className='icon'
        />
      </S.StyledBox>
    </Modal>
  );
};

export default MyModal;
