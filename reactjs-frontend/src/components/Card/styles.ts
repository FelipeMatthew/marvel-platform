import styled from 'styled-components';

export const Container = styled.div<{ imageUrl: string }>`
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  width: 18.125rem;
  height: 30rem;
  padding: 1.7rem;
  border-radius: 2.5rem;
  cursor: pointer; /* Indica que é clicável */
`;

export const ContentContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 16.875rem;
  border-radius: 2.5rem;
  background: rgb(180,58,58);
  background: linear-gradient(180deg, rgba(180,58,58,1) 0%, rgba(252,69,69,0.5690651260504201) 100%);

  h1 {
    position: absolute;
    top: 0.3rem;
    font-size: 1.5rem;
  }

  p {
    font-size: .9rem;
  }
`;  

export const Content = styled.p`
  position: absolute;
  top: 2rem;
  color: #fff;
  padding: 1.5rem;
  text-align: center;
`;

export const Details = styled.button`
  position: absolute; 
  bottom: 1rem;
  background-color: transparent;
  border: none;
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
`;

// Modal

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: none;
  img {
    height: 500px;
    width: 60%;
    border-radius: 25px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 20px;
`;