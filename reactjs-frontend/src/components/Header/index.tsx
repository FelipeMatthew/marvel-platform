import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/logo.png';
import userImage from '../../assets/images/user.png';
import * as S from './styled';

export type HeaderProps = {
  currentPage: '/characters' | '/movies' | '/hqs';
};

const Header = ({ currentPage }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <S.HeaderContainer>
      <Link to='/characters'>
        <S.Logo src={logoImage} alt="Logo" />
      </Link>
      <S.MenuIcon onClick={toggleMenu}>
        <div>&#9776;</div>
      </S.MenuIcon>
      <S.NavMenu isOpen={isMenuOpen}>
        <S.NavLink currentPage={currentPage} to="/characters">Personagens</S.NavLink>
        <S.NavLink currentPage={currentPage} to="/movies">Filmes</S.NavLink>
        <S.NavLink currentPage={currentPage} to="/hqs">HQs</S.NavLink>
        <S.UserContainer>
          <S.Avatar src={userImage} alt="Avatar" />
          <Link to='/login'>
            <S.Button>Sair</S.Button>
          </Link>
        </S.UserContainer>
      </S.NavMenu>
    </S.HeaderContainer>
  );
};

export default Header;