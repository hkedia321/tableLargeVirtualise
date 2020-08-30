import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavHeader from 'components/navHeader';
import Card from './card';
import DataTable from 'components/datatable';
import * as utils from 'utils';
import * as requestTableDataFunctions from 'actions/actionCreators';
import Loader from 'components/loader';
import ErrorDisplay from 'components/error';

const CARD_TITLE = "Your Facebook Campaigns Data"

const fetchTableData = (props) => {
    props.requestTableDataAction.requestTableData();
}

const extractStartingDate = (tableData) => {
    if (tableData.fetched && tableData.data.length !== 0)
        return tableData.data[0].trend[0].day;
    return null;
}

const extractEndingDate = (tableData) => {
    if (tableData.fetched && tableData.data.length !== 0) {
        const trend = tableData.data[0].trend;
        return trend[trend.length-1].day;
    }
    return null;
}



const Home = (props) => {

    useEffect(() => {
        fetchTableData(props);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
      const startingDate = extractStartingDate(props.tableData);
      const endingDate = extractEndingDate(props.tableData);
      const subtitle = `Showing Data From ${utils.formatDateForDisplay(startingDate)} to ${utils.formatDateForDisplay(endingDate)}`;
    return (
        <>
        <NavHeader />
        <Card 
         fetchTableData = {fetchTableData.bind(null, props)} 
         title = {CARD_TITLE}
         subtitle = {(props.tableData.fetched && props.tableData.data.length !== 0 && subtitle) || ''}
         isLoading = {!(props.tableData.fetched)}
         >
        <DataTable data = {props.tableData.data} show={props.tableData.fetched && props.tableData.data.length !== 0} />
        {props.tableData.fetched && !props.tableData.data && <ErrorDisplay message = {props.tableData.errorMsg}  />}
        {!props.tableData.fetched && <Loader /> }
        </Card>
        
        </>
    )
}

const mapStateToProps = state => ({
    tableData: state.tableData
})

const mapDispatchToProps = dispatch => {
    return { 
        requestTableDataAction: bindActionCreators(requestTableDataFunctions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);