import styled from "styled-components";

export const Container = styled.div`
  max-width: 60%;
  margin: 3rem auto;
  padding: 0 60px; 
  position: relative;
`;

export const CustomArrow = styled.div`
  display: block;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  cursor: pointer;

  &::before {
    content: '';
    border: solid red;
    border-width: 0 0.15vw 0.15vw 0;
    border-width: 0 0.15em 0.15em 0; /* Também pode usar 'em' para proporção relativa */
    display: inline-block;
    padding: 1vw; /* Alterado para usar porcentagem */
    padding: 1em;
  }
`;

export const NextArrow = styled(CustomArrow)`
  position: absolute;
  right: -2%;
  transform: rotate(-45deg);
`;

export const PrevArrow = styled(CustomArrow)`
  position: absolute;
  left: -10.5%;
  transform: rotate(135deg);
`;