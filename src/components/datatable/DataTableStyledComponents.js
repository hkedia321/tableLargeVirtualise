import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  table {
  width: 100%;
  table-layout: fixed;
  height: 90vh;
  overflow-y: scroll;
  border-collapse: collapse;
  th, td {
    border: 1px solid #d0d0d0;
    border-collapse: collapse;
    width: 200px;
  }
  th, td, tr {
    padding: 10px;
  }
  th {
    text-align: left;
  }
  thead tr {
      background: #f2f2f2;
      padding: 15px;
  }
  tbody td {
      position: relative;
  }
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