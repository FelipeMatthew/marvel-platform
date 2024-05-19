import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div<{ isVisible: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;

  backdrop-filter: blur(3);
  
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(0,0,0);

  opacity: 0;
  pointer-events: none;
  transition: .4s ease-in;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
  `}

`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 60px;
  padding: 2rem auto;


  :hover { 
    color: red;
    transition: ease-in-out 1s ;
  }
`;

export const NavLink = styled(Link)<{ currentPage: string }>`
  margin-left: 1rem;
  text-decoration: none;
  font-size: 30px;
  margin-left: 1rem;
  text-decoration: none;
  color: ${(props) => (props.currentPage === props.to ? '#fff' : 'rgba(255, 255, 255, 0.5)')};
  
`;

export const Avatar = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
`;




export const Button = styled.button`
  background-color: #ff0000;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 20px;
  color: #fff;
`;

export const UserContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 20px;
`;