import { createGlobalStyle } from "styled-components";

import axiformaFont from '../assets/fonts/Kastelov  Axiforma Regular.woff';

export const ResetCss = createGlobalStyle`
  html,
  body {
    font-family: axiforma;
    background-color: ${({ theme }) => theme.colors.background};
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

