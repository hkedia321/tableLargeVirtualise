import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../header/Header';
import Graph from '../graph/Graph';
import Card from './card/Card';
import DataTable from '../datatable/DataTable'
import * as requestTableDataFunctions from '../../actions/actionCreators';
import { REQUEST_TABLE_DATA } from '../../actions/actionTypes'
import Loader from '../loader/Loader';

class Home extends React.Component {
    fetchTableData = () => {
        this.props.requestTableDataAction.requestTableData();
    }
    render() {
    return (
        <>
        <Header />
        <Card fetchTableData={this.fetchTableData}>
            <h3>hetl</h3>
        <h3>{(this.props.tableData.fetched.toString())}</h3>
        { this.props.tableData.fetched ? <DataTable data={this.props.tableData.data} /> : <Loader /> }
        </Card>
        
        </>
    )
    }
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

// export default Home;