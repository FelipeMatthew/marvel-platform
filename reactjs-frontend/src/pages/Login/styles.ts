import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10rem;
  height: 100vh;


  @media(max-width: 900px) {
      max-width: 100%;
      align-items: center;
      margin-left: 0;
    }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 400px; 

  img { 
    height: 9.375rem;
    width: 18.75rem;
  }
`;



export const WelcomeText = styled.h1`
  color: ${theme.colors.details};
  letter-spacing: 1.1px;
  margin-bottom: -0.625rem;
`;

export const AccessText = styled.p`
  color: ${theme.colors.accentLight};
  font-size: ${theme.fontSizes.large};
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
  margin-top: ${theme.spacings.medium};
  font-size: ${theme.fontSizes.large};
  padding-left: ${theme.spacings.medium};

  border: 1px solid ${theme.colors.accentLight};

  &:focus {
    border-color: ${theme.colors.details}; 
    outline: none;
  }

  transition: border-color 0.8s ease;
`;

export const Flex = styled.div`
  display: flex; 
  justify-content: space-between;
  padding: ${theme.spacings.medium};
  align-items: center;
`;

export const Button = styled.button`
  
`;

export const Join = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: ${theme.colors.text};
  background-color: ${theme.colors.details};
  font-size: ${theme.fontSizes.xxl};
  padding: ${theme.spacings.medium};
  border-radius: 2.5rem;
  font-weight: 500;
  border: none;
`;

export const Label = styled.label`
   color: ${theme.colors.accentLight};
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  	accent-color: ${theme.colors.details};
`;

export const ForgotPass = styled(Link)`
  color: ${theme.colors.accentLight};
  text-decoration: none;
  border-bottom: solid 0.0625rem ${theme.colors.details};
`;

export const SignupMessage = styled.div`
  display: flex;
  margin-top: ${theme.spacings.medium};
  justify-content: center;
`;

export const Register = styled(Link)`
  margin-left: 0.4375rem;
  color: ${theme.colors.details};
  text-decoration: none;
`;

