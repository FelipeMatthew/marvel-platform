import { ReactElement, FC } from 'react'
import * as S from './styles'

type ModalProps = {
  isOpen: boolean,
  onClose: () => void,
  children: ReactElement |  ReactElement[]

}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if(!isOpen) {
    return null;
  }

  return (
    <S.Overlay onClick={onclose}>
      <h1>working on modal</h1>

    </S.Overlay>

  )

}

export default Modal