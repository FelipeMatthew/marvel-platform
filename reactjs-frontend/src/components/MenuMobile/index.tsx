import { IoClose } from 'react-icons/io5';
import * as S from './styles'
import { Link } from 'react-router-dom';

import userImage from '../../assets/images/user.png'
import { FC } from 'react';

type MenuMobileProps = {
  menuIsVisible: boolean;
  setMenuIsVisible: (isVisible: boolean) => void;
  currentPage: string
}

const MenuMobile: FC<MenuMobileProps> = ({ menuIsVisible, setMenuIsVisible, currentPage }) => {
  return (
    <S.Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)}/>
      <S.Nav>
        <S.NavLink currentPage={currentPage} to="/characters">Personagens</S.NavLink>
        <S.NavLink currentPage={currentPage} to="/movies">Filmes</S.NavLink>
        <S.NavLink currentPage={currentPage} to="/hqs">HQs</S.NavLink>
      </S.Nav>
      
      <S.UserContainer>
        <S.Avatar src={userImage} alt="Avatar" />
      <Link to='/login'>
        <S.Button>
          Sair
        </S.Button>
      </Link>
      </S.UserContainer>
    </S.Container>
  )
}

export default MenuMobile;