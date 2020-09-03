import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as StyledComponents from './DataTableStyledComponents';
import ColumnHeading from './ColumnHeading';
import RecordRow from './RecordRow';

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



const DataTable = function(props) {

    const [campaignColumnOpen, setCampaignColumnOpen] = useState(true);
    const [graphColumnsOpenArray, setGraphColumnsOpenArray] = useState(new Array(dataTableGraphRecords.length).fill(true));

    const handleToggleGraphColumnShow = (index) => {
        setGraphColumnsOpenArray(prev => 
            prev.slice(0, index)
            .concat(!prev[index])
            .concat(prev.slice(index+1)))
    }

    return (
        <>
    {props.show && 
        <TableStyled data-testid="datatable">
            <thead>
                <HeaderRowStyled>
                    <ColumnHeading 
                        handleToggleColumnShow={()=>setCampaignColumnOpen(prev => !prev)} 
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
                {props.data.map((item, index) => {
                    return (
                        <RecordRow
                         key={index} 
                         isCampaignColumnOpen={campaignColumnOpen} 
                         isGraphColumnsOpenArray={graphColumnsOpenArray}
                         rowData={item} 
                         dataTableGraphRecords={dataTableGraphRecords} 
                         />
                    )
                })}
            </tbody>
        </TableStyled>
    }
    <StyledComponents.GlobalStyle/>
    </>
    );
}

DataTable.propTypes = {
    data: PropTypes.array,
    show: PropTypes.bool
}
export default DataTable;