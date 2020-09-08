import React, { useEffect } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import PropTypes from "prop-types"
import NavHeader from "components/navHeader"
import DataTable from "components/datatable"
import * as utils from "utils"
import * as requestTableDataFunctions from "actions/actionCreators"
import Loader from "components/loader"
import ErrorDisplay from "components/error"
import Card from "./card"

const CARD_TITLE = "Your Facebook Campaigns' Data"

const extractStartingDate = (tableData) => {
  if (tableData.fetched && tableData.data.length !== 0)
    return tableData.data[0].trend[0].day
  return null
}

const extractEndingDate = (tableData) => {
  if (tableData.fetched && tableData.data.length !== 0) {
    const { trend } = tableData.data[0]
    return trend[trend.length - 1].day
  }
  return null
}

export const Home = ({ tableData, requestTableDataAction }) => {
  const startingDate = extractStartingDate(tableData)
  const endingDate = extractEndingDate(tableData)
  const subtitle = `Showing Data From ${utils.formatDateForDisplay(
    startingDate
  )} to ${utils.formatDateForDisplay(endingDate)}`

  const fetchTableData = React.useCallback(() => {
    requestTableDataAction.requestTableData()
  }, [requestTableDataAction])

  useEffect(() => {
    fetchTableData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div data-testid="home">
      <NavHeader />
      <Card
        fetchTableData={fetchTableData}
        title={CARD_TITLE}
        subtitle={
          (tableData.fetched && tableData.data.length !== 0 && subtitle) || ""
        }
        isLoading={!tableData.fetched}
      >
        <>
          <DataTable
            data={tableData.data || []}
            show={(tableData.fetched && tableData.data.length !== 0) || false}
          />
          {tableData.fetched && !tableData.data && (
            <ErrorDisplay message={tableData.errorMsg} />
          )}
          {!tableData.fetched && <Loader />}
        </>
      </Card>
    </div>
  )
}

const mapStateToProps = (state) => ({
  tableData: state.tableData,
})

const mapDispatchToProps = (dispatch) => ({
  requestTableDataAction: bindActionCreators(
    requestTableDataFunctions,
    dispatch
  ),
})
Home.propTypes = {
  tableData: PropTypes.object.isRequired,
  requestTableDataAction: PropTypes.object.isRequired,
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
