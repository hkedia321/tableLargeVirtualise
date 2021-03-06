import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Head from "./Head"

const CardStyled = styled.div`
  background-color: #fff;
  padding: 0 15px 25px;
  box-shadow: #eee 2px 2px;
  margin: 30px auto;
  width: 80%;
  // height: calc(100vh - 140px);
`

const CardBody = styled.div`
  padding: 20px 0px;
`

const Card = React.memo((props) => (
  <CardStyled data-testid="card">
    <Head
      fetchTableData={props.fetchTableData}
      title={props.title}
      isLoading={props.isLoading}
      subtitle={props.subtitle}
    />
    <CardBody>{props.children}</CardBody>
  </CardStyled>
))

Card.propTypes = {
  fetchTableData: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
}

export default Card
