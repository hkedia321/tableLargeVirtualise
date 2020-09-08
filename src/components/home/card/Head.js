import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import ReactTooltip from "react-tooltip"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons"

const HeadStyled = styled.div`
  border-bottom: solid 1px #eee;
`
const HeadingText = styled.h3`
  display: inline-block;
  margin-bottom: 5px;
`
const HeadingSubText = styled.h4`
  font-weight: normal;
  margin-top: 0;
  color: #767676;
  font-weight: bold;
`
const FontAwesomeIconStyled = styled(({ isLoading, ...rest }) => (
  <FontAwesomeIcon {...rest} />
))`
  float: right;
  cursor: pointer;
  margin-top: 20px;
  animation: ${(props) =>
    props.isLoading ? "spin 1s linear infinite" : "null"};
`

function Head({ isLoading, fetchTableData, subtitle, title }) {
  return (
    <HeadStyled data-testid="cardHead">
      <FontAwesomeIconStyled
        isLoading={isLoading}
        data-tip="Reload Data"
        icon={faRedoAlt}
        onClick={fetchTableData}
      />
      <HeadingText>{title}</HeadingText>
      <HeadingSubText dangerouslySetInnerHTML={{ __html: subtitle }} />
      <ReactTooltip place="bottom" effect="solid" />
    </HeadStyled>
  )
}
Head.propTypes = {
  fetchTableData: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  subtitle: PropTypes.string.isRequired,
}
export default Head
