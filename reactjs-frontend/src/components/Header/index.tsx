import logoImage from '../../assets/images/logo.png';
import userImage from '../../assets/images/user.png'

import * as S from './styled'

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Logo src={logoImage} alt="Logo" />
      <S.Nav>
        <S.NavLink to="/characters">Personagens</S.NavLink>
        <S.NavLink to="/movies">Filmes</S.NavLink>
        <S.NavLink to="/hqs">HQs</S.NavLink>
      </S.Nav>
      <div>
        <S.Avatar src={userImage} alt="Avatar" />
        <S.Button>Sair</S.Button>
      </div>
    </S.HeaderContainer>

  );
}

export default Header;