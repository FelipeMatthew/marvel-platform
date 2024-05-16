import styled from "styled-components";


export const Container = styled.div<{ imageUrl: string }>`
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  position: relative;
  width: 290px;
  height: 480px;
  padding: 1.7rem;
  border-radius: 40px;
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
  height: 270px;
  border-radius: 40px;
  background: rgb(180,58,58);
  background: linear-gradient(180deg, rgba(180,58,58,1) 0%, rgba(252,69,69,0.5690651260504201) 100%);

  h1 {
    position: absolute;
    top: 1rem;
    font-size: 26px;
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
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
`;