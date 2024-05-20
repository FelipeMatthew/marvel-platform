import styled from "styled-components";

export const Container = styled.div`
  max-width: 70%;
  margin: 3rem auto;
  padding: 0 60px; 
  position: relative;
  width: 1400px;

  @media (min-width: 729px) {
    padding: 0;
    width : 90%;
    }
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

