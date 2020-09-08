import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { VariableSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import * as StyledComponents from './DataTableStyledComponents';
import ColumnHeading from './ColumnHeading';

import DataCellGraph from './DataCellGraph';
import DataCellCampaignId from './DataCellCampaignId';

const dataTableGraphRecords = [
    {
        heading: 'App and Installs',
        key: 'aj_app_and_installs'
    },
    {
        heading: 'CoH Real Acquisition',
        key: 'aj_coh_0w_and_real_acquisition'
    }
]

const TableStyled = styled.table`
    width: 100%;
    table-layout: fixed;
    height: 90vh;
    overflow-y: scroll;
    border-collapse: collapse;
`;

const HeaderRowStyled = styled.tr`
    background: #f2f2f2;
    padding: 15px;
`;



const DataTable = React.memo(function(props) {

    const [campaignColumnOpen, setCampaignColumnOpen] = useState(true);
    const [graphColumnsOpenArray, setGraphColumnsOpenArray] = useState(new Array(dataTableGraphRecords.length).fill(true));

    const handleToggleGraphColumnShow = (index) => {
        setGraphColumnsOpenArray(prev => 
            prev.slice(0, index)
            .concat(!prev[index])
            .concat(prev.slice(index+1)))
    }
    const handleToggleCampaignIdColumnShow = () => {
        setCampaignColumnOpen(prev => !prev)
        // for reflowing highchart
        window.dispatchEvent(new Event('resize'));
    }
 
    const Cell = ({ columnIndex, rowIndex, style }) => {
        // console.log(rowIndex, columnIndex);
        const rowData = props.data[rowIndex];
        const isCampaignColumnOpen = campaignColumnOpen;
        
        if (columnIndex === 0) {
           return <DataCellCampaignId style={style} text={rowData.groups.Campaign.metadata.name} isOpen={isCampaignColumnOpen} />
        }
        else {
            const columnObject = dataTableGraphRecords[columnIndex-1];
            return <DataCellGraph style={style} isOpen={graphColumnsOpenArray[columnIndex - 1]} columnObject={columnObject} rowData={rowData}  />
        }
        
    }
   
    return (
        <>
    {props.show && 
        <>
            <div className="dataTableWrap">

<TableStyled data-testid="datatable">
            <thead>
                <HeaderRowStyled>
                    <ColumnHeading 
                        handleToggleColumnShow={handleToggleCampaignIdColumnShow} 
                        text="Campaign Id" 
                        isGraphHeader={false} 
                        isOpen={campaignColumnOpen} 
                    />
                    {dataTableGraphRecords.map((item, index) => 
                        <ColumnHeading 
                            key={index} 
                            isGraphHeader={true}    
                            text={item.heading} 
                            columnKey={item.key} 
                            data={props.data} 
                            handleToggleColumnShow={() => handleToggleGraphColumnShow(index)}
                            isOpen={graphColumnsOpenArray[index]} 
                            />
                     )}
                </HeaderRowStyled>
            </thead>
            <tbody>
                <AutoSizer>
                {({ height, width }) => (
                <Grid
                    className="Grid"
                    height={height}
                    columnCount={3}
                    rowCount={props.data.length}
                    width={width}
                    rowHeight={() => 250}
                    columnWidth={(index)=>440}
                >
                    {Cell}
                </Grid>
                 )}
            </AutoSizer>
            </tbody>
        </TableStyled>
            
            </div>
        </>
    }
    <StyledComponents.GlobalStyle/>
    </>
    );
})

DataTable.propTypes = {
    data: PropTypes.array,
    show: PropTypes.bool
}
export default DataTable;