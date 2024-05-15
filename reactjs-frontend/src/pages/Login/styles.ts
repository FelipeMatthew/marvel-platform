import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 1.5rem;
`;

export const LogoImage = styled.img`
  height: 9.375rem;
  width: 18.75rem;
`;

export const WelcomeText = styled.h1`
  color: #FF0000;
  letter-spacing: 1.1px;
  margin-bottom: -0.625rem;
`;

export const AccessText = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.25rem;
  margin-bottom: -0.625rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  height: 3.75rem;
  width: 25rem;
  border-radius: 2.5rem;
  margin-top: 0.9375rem;
  font-size: 1.25rem;
  padding-left: 1.875rem;

  border: 1px solid #ccc;

  &:focus {
    border-color: #FF0000; 
    outline: none;
  }

  transition: border-color 0.8s ease;
`;

export const Flex = styled.div`
  display: flex; 
  justify-content: space-between;
  padding: 1.875rem;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #FF0000;
  font-size: 1.5625rem;
  padding: 1.25rem;
  border-radius: 3.125rem;
  font-weight: 500;

  border: none;
`;

export const Join = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const Label = styled.label`
   color: rgba(255, 255, 255, 0.5);
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  	accent-color: #FF0000;
`;

export const ForgotPass = styled(Link)`
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  border-bottom: solid 0.0625rem #FF0000;
`;

export const SignupMessage = styled.div`
  display: flex;
  margin-top: 1.25rem;
  justify-content: center;
`;

export const Register = styled(Link)`
  margin-left: 0.4375rem;
  color: #FF0000;
  text-decoration: none;
`;