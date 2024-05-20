import logoPicture from '../../assets/images/logo.png'

import * as S from './styles'

const LoginPage = () => {
  return (
    <>
      <S.Container>
        <S.ImgContainer>
          <img src={logoPicture} alt="Logo Image" />
        </S.ImgContainer>

        <div>
          <S.WelcomeText>Bem vindo(a) de volta!</S.WelcomeText>
          <S.AccessText>Acesse sua conta:</S.AccessText>
        </div>

        <S.Form action="">
            <S.Input type="text" placeholder="Usuário" id="user"/>
            <S.Input type="password" placeholder="Senha" id="password"/>

            <S.Flex>
              <S.Label htmlFor="save-login">
                <S.Checkbox type="checkbox" id="save-login"/>
                Salvar login
              </S.Label>
                
              <S.ForgotPass to='/'>Esqueci a senha</S.ForgotPass>      
            </S.Flex>

            <S.Join to='/characters'>Entrar</S.Join>

            <S.SignupMessage>
              Ainda não tem login? 
              <S.Register to='/'>Cadastre-se</S.Register>
            </S.SignupMessage>
        </S.Form>
      </S.Container>
      
    </>
  )
}

export default LoginPage;
