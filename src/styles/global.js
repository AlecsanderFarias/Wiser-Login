import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif !important;

  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100% !important;
    background: #F9F9F9;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Ubuntu', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .mdc-text-field__input {
  box-sizing: initial; // or content-box
  }

  .MuiDialog-paper {
    overflow: hidden !important;
  }
    
`;
