import React from 'react';
import PropTypes from 'prop-types';
import * as StyledComponents from './DataTableStyledComponents';
import Graph from 'components/graph/Graph';

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

function DataTable(props) {
    return (
        <>
    <table>
        <thead>
            <tr>
                <th>Campaign Id</th>
                {dataTableGraphRecords.map((item, index) => <th key={index}>{item.heading}</th>)}
            </tr>
        </thead>
        <tbody>
            {props.data.data.slice(0,10).map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.groups.Campaign.metadata.name}</td>
                        {dataTableGraphRecords.map((columnObject, index) => {
                            const graphData = item.trend.map(dayData => dayData[columnObject.key])
                            const total = item.trend.reduce((total, dayData) => total + dayData[columnObject.key], 0)
                            return <td key={index}><Graph data={graphData} total={total} /></td>
                        })}
                        
                    </tr>
                )
            })}
        </tbody>
    </table>
    <StyledComponents.GlobalStyle/>
    </>
    );
}
DataTable.propTypes = {
    data: PropTypes.object
}
export default DataTable;