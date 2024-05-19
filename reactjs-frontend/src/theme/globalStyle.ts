import { createGlobalStyle } from "styled-components";

import axiformaFont from '../assets/fonts/Kastelov  Axiforma Regular.woff';

export const ResetCss = createGlobalStyle`
  html,
  body {
    font-family: axiforma;
    background-color: black;
    color: #fff;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0; 
  }

  @font-face {
    font-family: axiforma;
    src: url('${axiformaFont}');
  }
`;

