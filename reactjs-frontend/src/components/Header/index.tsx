import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/logo.png';
import userImage from '../../assets/images/user.png'

import * as S from './styled'
import { useState } from 'react';

export type HeaderProps = {
  currentPage?: '/characters' | '/movies' | '/hqs';
}

const Header = ({ currentPage } : HeaderProps) => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <S.HeaderContainer>
      <Link to='/characters'>
        <S.Logo src={logoImage} alt="Logo" />
      </Link>
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
    </S.HeaderContainer>

  );
}

export default Header;