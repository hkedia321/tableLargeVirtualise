import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

function DataTable() {
    return (
    <Table border="1">
        <thead>
            <th>Account Type</th>
            <th>Total SEM cost</th>
            <th>Total SEM Acuisition</th>
            <th>Total SEM BE</th>
        </thead>
        <tbody>
            <tr>
                <td>App Installs</td>
                <td>data 1</td>
                <td>data 2</td>
            </tr>
            <tr>
                <td>App Installs</td>
                <td>data 1</td>
                <td>data 2</td>
            </tr>
            <tr>
                <td>App Installs</td>
                <td>data 1</td>
                <td>data 2</td>
            </tr>
        </tbody>
    </Table>
    );
}

export default DataTable;