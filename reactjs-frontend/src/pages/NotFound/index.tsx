import * as S from './style'

const NotFoundPage = () => {
  return (
    <S.Container>
      <h1>Erro 404</h1>
      <h2>Page não encontrada</h2>
      <p>Volte para ver seus super heróis</p>
      
      <S.Button to='/'>Voltar</S.Button>
    </S.Container>
  )
}

export default NotFoundPage;
