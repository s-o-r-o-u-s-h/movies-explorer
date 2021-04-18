import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    font-size: 16px;
    --black-color: #000000;
    --header-color: #fff0aa;
    --border-color: #d4c26a;
    --focus-color: #aa9639;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
  }
  .m-1 {
    margin: 0.25rem !important;
  }
  .m-2 {
    margin: 0.5rem !important;
  }
  .m-3 {
    margin: 1rem !important;
  }
  .m-4 {
    margin: 1.5rem !important;
  }
  .m-5 {
    margin: 2rem !important;
  }
  .mh-1 {
    margin: 0 0.25rem !important;
  }
  .mh-2 {
    margin: 0 0.5rem !important;
  }
  .mh-3 {
    margin: 0 1rem !important;
  }
  .mh-4 {
    margin: 0 1.5rem !important;
  }
  .mh-5 {
    margin: 0 2rem !important;
  }
  .p-1 {
    padding: 0.25rem !important;
  }
  .p-2 {
    padding: 0.5rem !important;
  }
  .p-3 {
    padding: 1rem !important;
  }
  .p-4 {
    padding: 1.5rem !important;
  }
  .p-5 {
    padding: 2rem !important;
  }
  .ph-1 {
    padding: 0 0.25rem !important;
  }
  .ph-2 {
    padding: 0 0.5rem !important;
  }
  .ph-3 {
    padding: 0 1rem !important;
  }
  .ph-4 {
    padding: 0 1.5rem !important;
  }
  .ph-5 {
    padding: 0 2rem !important;
  }
`;

export default GlobalStyle;
