import { createGlobalStyle } from "styled-components";

import backgroundImage from '../assets/images/background-picture.png'

export const ResetCss = createGlobalStyle`
  html,
  body {
    background-color: ${ backgroundImage };
    font-family: 'KastelovAxiforma', sans-serif;
    color: white;
  }
`;