import React from 'react';
import PropTypes from 'prop-types';
import DataCellGraph from './DataCellGraph';
import DataCellCampaignId from './DataCellCampaignId';

const RecordRow = React.memo(function(props) {
    const { rowData, dataTableGraphRecords, isCampaignColumnOpen, isGraphColumnsOpenArray } = props;
    return (
        <tr className="rowDiv" data-testid="recordRow" style={props.style}>
            <DataCellCampaignId text={rowData.groups.Campaign.metadata.name} isOpen={isCampaignColumnOpen} />
            {dataTableGraphRecords.map((columnObject, index) => 
                <DataCellGraph key={index} isOpen={isGraphColumnsOpenArray[index]} columnObject={columnObject} rowData={rowData}  />
            )}
            
        </tr>
    )
})

RecordRow.propTypes = {
    dataTableGraphRecords: PropTypes.array,
    rowData: PropTypes.object,
    isCampaignColumnOpen: PropTypes.bool,
    isGraphColumnsOpenArray: PropTypes.array,
    style: PropTypes.object
}

export default RecordRow;