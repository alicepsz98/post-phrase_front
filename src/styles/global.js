import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    outline: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
  html {
    @media(max-width: 720px) {font-size: 87.5%;}
    @media(max-width: 1024px) {font-size: 93.75%;}
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ul {
    list-style: none;
  } 
`;

