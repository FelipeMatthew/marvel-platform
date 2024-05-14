import styled from 'styled-components';

import testing from '../../assets/images/background-picture.png'

const NotFoundPage = () => {
  return (
    <Testing>
      <h1>Not Found Page</h1>
    </Testing>
  )
}

const Testing = styled.div`
  color: red;
  background-color: ${ testing } transparent;
`;

export default NotFoundPage;
