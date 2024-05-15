import { createGlobalStyle } from "styled-components";

export const ResetCss = createGlobalStyle`
  html,
  body {
    font-family: 'KastelovAxiforma', sans-serif;
    background-color: #000;
    color: #fff;
    height: 1920px;
    width: 1200px;
    margin: 0;
    padding: 0; 
    overflow: hidden;
  }

  @media (min-width: 768px) {
  body {
    background-color: #000;
  }
  
  .container {
    width: 960px;
    margin: 0 auto;
  }
}

@media (max-width: 767px) {
  body {
    background-color: #000;
  }
  
  .container {
    width: 100%;
    padding: 0 10px;
  }
}
`;

