import React from 'react';
import PropTypes from 'prop-types';
import DataCellGraph from './DataCellGraph';
import DataCellCampaignId from './DataCellCampaignId';

const RecordRow = React.memo(function(props) {
    const { rowData, dataTableGraphRecords, isCampaignColumnOpen, isGraphColumnsOpenArray } = props;
    return (
        <tr data-testid="recordRow">
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
    isGraphColumnsOpenArray: PropTypes.array
}

export default RecordRow;