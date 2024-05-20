import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledBox = styled(Box)`
  display: flex;
  gap: 50px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${({ theme }) => theme.colors.text};
  box-shadow: 24px;
  padding: 16px;
  border-radius: 24px;

  background: rgb(255,0,0);
  background: linear-gradient(90deg, rgba(255,0,0,0.6755077030812324) 75%, rgba(106,0,0,0.9248074229691877) 97%); 


  .icon {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    cursor: pointer;
  }
`;

export const Img = styled.img`
  margin: -17px;
  border-radius: 25px;
  height: 600px;
  width: 45%;

  @media (max-width: 900px) {
      display: none;
    }
`;

export const ContentContainer = styled.div`

  h1 { 
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    h3 {
      font-size: 1.6rem;
    }
    p {
      font-size: 2rem;
    }
  }
  
`;