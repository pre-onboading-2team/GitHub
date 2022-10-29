import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
 
  body {
    height: 100%;
    width: 100%;
    font-size: 62.5%;
  }

  ol, ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    &:link,
    &:visited {
      color: inherit;
    }
  }

  button {
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    html {
      font-size: 12px;
    }
  }

  @media screen and (min-width: 600px) {
    html {
      font-size: 13px;
    }
  }

  @media screen and (min-width: 768px) {
    html {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 992px) {
    html {
      font-size: 15px;
    }
  }

  @media screen and (min-width: 1200px) {
    html {
      font-size: 16px;
    }
  }
`;
