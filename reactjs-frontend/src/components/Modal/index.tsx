// src/components/CustomModal.tsx
import React, { ReactElement } from 'react';
import { Modal} from '@mui/material';

import * as S from './styles'
import { IoMdCloseCircleOutline } from 'react-icons/io';

type CustomModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactElement;
};

const CustomModal: React.FC<CustomModalProps> = ({ open, onClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <S.StyledBox>
          {children}
          <IoMdCloseCircleOutline 
          size={45}
          onClick={onClose}
        />
      </S.StyledBox>
    </Modal>
  );
};

export default CustomModal;
