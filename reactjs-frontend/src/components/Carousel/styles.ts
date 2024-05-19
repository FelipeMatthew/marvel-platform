import styled from "styled-components";

export const Container = styled.div`
  max-width: 60%;
  margin: 3rem auto;
  padding: 0 60px; 
  position: relative;
  width: 1400px;
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
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 10px;
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