import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const Button = styled(Link)`
  padding: 2rem 5rem;
  border-radius: 40px;
  font-weight: 600;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.details};
`;