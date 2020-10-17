import { createGlobalStyle } from "styled-components";



const GlobalStyled = createGlobalStyle`
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  font-family: Arial, sans-serif;
  padding-bottom: 20px;
  background: rgb(117,115,144);
  background: linear-gradient(90deg, rgba(117,115,144,1) 0%, rgba(211,240,6,1) 42%, rgba(255,0,0,1) 100%);
}
li {
    list-style-type: none;
}
`;

export default GlobalStyled;