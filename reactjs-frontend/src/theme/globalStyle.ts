import { createGlobalStyle } from "styled-components";

import bgPicture from '../assets/images/bgImg.png'

import axiformaFont from '../assets/fonts/Kastelov  Axiforma Regular.woff';

export const ResetCss = createGlobalStyle`
  html,
  body {
    background-image: url(${bgPicture});
    background-position: center;
    background-color: ${({ theme }) => theme.colors.background};
    background-repeat: no-repeat;
    background-size: cover;

    font-family: axiforma;
    color: ${({ theme }) => theme.colors.text};
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0; 
  }

  @font-face {
    font-family: axiforma;
    src: url('${axiformaFont}');
  }
`;

