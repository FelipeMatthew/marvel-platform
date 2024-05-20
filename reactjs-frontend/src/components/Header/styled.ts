import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeaderProps } from ".";

type NavLinkProps = Pick<HeaderProps, 'currentPage'>

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  background-color: #000;
  color: #fff;
  border-bottom: red 4px solid;
  font-weight: bold;

  .mobile { 
    display: none;
  }

  > svg { 
    margin-right: 2rem;
  }

  @media(max-width: 900px) {
      .mobile {
        display: initial;
      }
      > nav {
        display: none;
      }
    }
  
  
`;

export const Logo = styled.img`
  height: 60px;
  width: auto;
  margin-left: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 60px;
  
  :hover { 
    color: red;
    transition: ease-in-out 1s ;
  }
  
`;

export const NavLink = styled(Link)<NavLinkProps>`
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
  display: flex;
  align-items: center;
  margin-right: 30px;
  gap: 20px;

  @media(max-width: 900px) {
      display: none;
    }
`;