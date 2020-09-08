import React from "react"
import styled from "styled-components"
import PuffLoader from "react-spinners/PuffLoader"

// eslint-disable-next-line react/jsx-props-no-spreading
const LoaderStyled = styled((props) => <div {...props} />)`
  margin: 100px 0;
`

function Loader() {
  return (
    <LoaderStyled data-testid="loader" align="center">
      <PuffLoader size={100} color="#123abc" />
    </LoaderStyled>
  )
}

export default Loader
