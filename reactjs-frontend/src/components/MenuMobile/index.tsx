import { IoClose } from 'react-icons/io5';
import * as S from './styles'
import { Link } from 'react-router-dom';

import userImage from '../../assets/images/user.png'

type MenuMobileProps = {
  menuIsVisible: boolean;
  setMenuIsVisible: boolean;
  currentPage: string
}

const MenuMobile = ({ menuIsVisible, setMenuIsVisible, currentPage }) => {
  return (
    <S.Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible()}/>
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