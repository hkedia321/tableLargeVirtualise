import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sha256 from 'crypto-js/sha256';
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

const DataCellStyled = styled.div`
    position: relative;
    padding: 10px;
    width: auto;
    padding-top: 30px;
`;

const DataCellGraph = React.memo(function(props) {
        const { columnObject, rowData, isOpen } = props;
        const graphData = rowData.trend.map(dayData => [dayData.day, dayData[columnObject.key]])
        const total = rowData.trend.reduce((total, dayData) => total + dayData[columnObject.key], 0)
        console.log('Rendering DataCellGraph')
        return (
         <DataCellStyled className="dataCellGraph" style={props.style} data-testid="dataCellGraph">
            {isOpen && <>
            <TotalHeading dangerouslySetInnerHTML={{ __html: utils.formatCurrencyForDisplay(total)}}></TotalHeading>
            <Graph data={graphData} total={total} />
            </>
            }
        </DataCellStyled>
        )
}, (prevProps, nextProps) => {
    // if same return true to skip re-rendering
    const h1 = sha256(JSON.stringify(prevProps)).toString();
    const h2 = sha256(JSON.stringify(nextProps)).toString();
    if (h1 === h2) return true;
    return false;
})

export default DataCellGraph;

DataCellGraph.propTypes = {
    columnObject: PropTypes.object,
    rowData: PropTypes.object,
    isOpen: PropTypes.bool,
    style: PropTypes.object
}