import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  td, th {
    border: 1px solid #d0d0d0;
    border-collapse: collapse;
    transition: max-width 1s ease;
  }
`;

// export const GlobalStyle = createGlobalStyle`
// .fixed_header{
//     width: 100%;
//     table-layout: fixed;
//     border-collapse: collapse;
// }

// .fixed_header tbody{
//   display:block;
//   width: 100%;
//   overflow: auto;
//   height: 60vh;
// }

// .fixed_header thead tr {
//    display: block;
// }

// .fixed_header thead {
//   background: black;
//   color:#fff;
// }

// .fixed_header th, .fixed_header td {
//   padding: 5px;
//   text-align: left;
//   width: 370px;
// }`;