import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  width:100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
`;

export const Logo = styled.img`
  height: 40px;
  width: auto;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  margin-left: 1rem;
  text-decoration: none;
  color: #fff;
`;

export const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

export const Button = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
`;