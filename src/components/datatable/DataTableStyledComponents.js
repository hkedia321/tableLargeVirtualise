import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  td, th {
    border: 1px solid #d0d0d0;
    border-collapse: collapse;
    transition: max-width 1s ease;
  }
`
export default GlobalStyle
