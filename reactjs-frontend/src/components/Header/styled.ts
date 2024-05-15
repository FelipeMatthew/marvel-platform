import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeaderProps } from ".";

type NavLinkProps = Pick<HeaderProps, 'currentPage'>

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #000;
  color: #fff;
  border-bottom: 4px solid red;
  font-weight: bold;
`;

export const Logo = styled.img`
  height: 3.75rem;
  width: auto;
  margin-left: 1.25rem;
`;

export const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 3.75rem;
  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #333;
    width: 100%;
    padding-top: 1rem;
    transition: transform 0.3s ease;
    transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  }
`;

export const NavLink = styled(Link)<NavLinkProps>`
  text-decoration: none;
  font-size: 1.875rem;
  color: ${({ currentPage }) => (currentPage ? '#fff' : 'rgba(255, 255, 255, 0.5)')};
  @media (max-width: 768px) {
    padding: 1rem;
    &:hover {
      background-color: #555;
    }
  }
`;

export const Avatar = styled.img`
  height: 3.75rem;
  width: 3.75rem;
  border-radius: 50%;
`;

export const Button = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.25rem;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;