import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: "Fixel" !important;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
    color: #212529;
    box-sizing: border-box;
  }

  input, button, textarea {
    font-family: inherit;
    border: none;
  }

  html, body, #root {
    height: 100%;
  }

  a {
    color: black;
    cursor: pointer;
  }

  a:hover, a:link, a:visited {
    text-decoration: none;
  }
`;

export default GlobalStyles;
