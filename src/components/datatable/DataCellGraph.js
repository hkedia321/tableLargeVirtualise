import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Graph from 'components/graph';
import * as utils from 'utils';

const TotalHeading = styled.h4`
    position: absolute;
    z-index: 1;
    font-weight: normal;
    right: 20px;
    top: -5px;
    text-align: right;
    color: #3f3f3f;
`;

const DataCellStyled = styled.td`
    position: relative;
    padding: 10px;
    width: auto;
    padding-top: 30px;
`;

const DataCellGraph = React.memo(function(props) {
        const { columnObject, rowData, isOpen } = props;
        const graphData = rowData.trend.map(dayData => [dayData.day, dayData[columnObject.key]])
        const total = rowData.trend.reduce((total, dayData) => total + dayData[columnObject.key], 0)
        return (
         <DataCellStyled data-testid="dataCellGraph">
            {isOpen && <>
            <TotalHeading>{utils.formatCurrencyForDisplay(total)}</TotalHeading>
            <Graph data={graphData} total={total} />
            </>
            }
        </DataCellStyled>
        )
})

export default DataCellGraph;

DataCellGraph.propTypes = {
    columnObject: PropTypes.object,
    rowData: PropTypes.object,
    isOpen: PropTypes.bool
}