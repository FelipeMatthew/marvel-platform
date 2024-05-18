import { createGlobalStyle } from "styled-components";


export const ResetCss = createGlobalStyle`
  html,
  body {
    font-family: 'KastelovAxiforma', sans-serif;
    color: #fff;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0; 
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

