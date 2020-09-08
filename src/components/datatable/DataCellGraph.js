import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import sha256 from "crypto-js/sha256"
import Graph from "components/graph"
import * as utils from "utils"

const TotalHeading = styled.h4`
  position: absolute;
  z-index: 1;
  font-weight: normal;
  right: 20px;
  top: -5px;
  text-align: right;
  color: #3f3f3f;
`

const DataCellStyled = styled.div`
  position: relative;
  padding: 10px;
  width: auto;
  padding-top: 30px;
`

const DataCellGraph = React.memo(
  ({ columnObject, rowData, isOpen, style }) => {
    const graphData = rowData.trend.map((dayData) => [
      dayData.day,
      dayData[columnObject.key],
    ])
    const total = rowData.trend.reduce(
      (totalCollect, dayData) => totalCollect + dayData[columnObject.key],
      0
    )
    // eslint-disable-next-line no-console
    console.log("Rendering DataCellGraph")
    return (
      <DataCellStyled
        className="dataCellGraph"
        style={style}
        data-testid="dataCellGraph"
      >
        {isOpen && (
          <>
            <TotalHeading
              dangerouslySetInnerHTML={{
                __html: utils.formatCurrencyForDisplay(total),
              }}
            />
            <Graph data={graphData} total={total} />
          </>
        )}
      </DataCellStyled>
    )
  },
  (prevProps, nextProps) => {
    // if same return true to skip re-rendering
    const h1 = sha256(JSON.stringify(prevProps)).toString()
    const h2 = sha256(JSON.stringify(nextProps)).toString()
    if (h1 === h2) return true
    return false
  }
)

export default DataCellGraph

DataCellGraph.propTypes = {
  columnObject: PropTypes.object.isRequired,
  rowData: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  style: PropTypes.object.isRequired,
}
