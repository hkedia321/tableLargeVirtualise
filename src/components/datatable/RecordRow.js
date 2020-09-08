import React from "react"
import PropTypes from "prop-types"
import DataCellGraph from "./DataCellGraph"
import DataCellCampaignId from "./DataCellCampaignId"

const RecordRow = React.memo((props) => {
  const {
    rowData,
    dataTableGraphRecords,
    isCampaignColumnOpen,
    isGraphColumnsOpenArray,
  } = props
  return (
    <tr className="rowDiv" data-testid="recordRow" style={props.style}>
      <DataCellCampaignId
        text={rowData.groups.Campaign.metadata.name}
        isOpen={isCampaignColumnOpen}
      />
      {dataTableGraphRecords.map((columnObject, index) => (
        <DataCellGraph
          key={index}
          isOpen={isGraphColumnsOpenArray[index]}
          columnObject={columnObject}
          rowData={rowData}
        />
      ))}
    </tr>
  )
})

RecordRow.propTypes = {
  dataTableGraphRecords: PropTypes.array.isRequired,
  rowData: PropTypes.object.isRequired,
  isCampaignColumnOpen: PropTypes.bool.isRequired,
  isGraphColumnsOpenArray: PropTypes.array.isRequired,
  style: PropTypes.object.isRequired,
}

export default RecordRow
