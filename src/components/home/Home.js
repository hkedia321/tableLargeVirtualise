import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../navHeader/Header';
import Card from './card/Card';
import DataTable from '../datatable/DataTable'
import * as requestTableDataFunctions from '../../actions/actionCreators';
import Loader from '../loader/Loader';
import ErrorDisplay from 'components/error/ErrorDisplay';

const fetchTableData = (props) => {
    props.requestTableDataAction.requestTableData();
}

const CARD_TITLE = "Your Campaigns Data Trend"

const Home = (props) => {

    useEffect(() => {
        fetchTableData(props);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])

    return (
        <>
        <Header />
        <Card fetchTableData = {fetchTableData.bind(null, props)} title = {CARD_TITLE}>
        {console.log(props.tableData.error)}
        { props.tableData.fetched ? 
          (props.tableData.data ? <DataTable data = {props.tableData.data} /> : <ErrorDisplay message = {props.tableData.errorMsg} />)
         : <Loader /> 
         }
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