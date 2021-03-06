import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    background-color: #f0f0f0;
    color: #2c3e50;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    line-height: 1.7;
  }

  p {
    margin: 1rem 0;
  }

  a {
    text-decoration: none;
  }

  code {
    position: relative;
    top: -1px;
    font-size: 1.2rem;
    background-color: #ddd;
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
  }

  ul {
    list-style-position: inside;
    padding-left: 0.5rem;
  }

  .icon {
    position: relative;
  }
`;
