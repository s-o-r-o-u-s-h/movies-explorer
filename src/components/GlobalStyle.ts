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
    --white-color: #ffffff;
    --header-color: #897BAF;
    --header-secondary-color: #281758;
    --border-color: #605292;
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
    margin-left: 0.25rem !important;
    margin-right: 0.25rem !important;
  }
  .mh-2 {
    margin-left: 0.5rem !important;
    margin-right: 0.5rem !important;
  }
  .mh-3 {
    margin-left: 1rem !important;
    margin-right: 1rem !important;
  }
  .mh-4 {
    margin-left: 1.5rem !important;
    margin-right: 1.5rem !important;
  }
  .mh-5 {
    margin-left: 2rem !important;
    margin-right: 2rem !important;
  }
  .mv-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .mv-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .mv-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .mv-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .mv-5 {
    margin-top: 2rem !important;
    margin-bottom: 2rem !important;
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
    padding-left: 0.25rem !important;
    padding-right: 0.25rem !important;
  }
  .ph-2 {
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;
  }
  .ph-3 {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
  .ph-4 {
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
  }
  .ph-5 {
    padding-left: 2rem !important;
    padding-right: 2rem !important;
  }
  .pv-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .pv-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .pv-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .pv-4 {
    padding-top: 1.5rem !important;
    padding-right: 1.5rem !important;
  }
  .pv-5 {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
  }
`;

export default GlobalStyle;
