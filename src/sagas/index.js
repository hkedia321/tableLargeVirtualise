import { all } from "redux-saga/effects"
import { listenForGetTableData } from "./tableData"

export default function* rootSaga() {
  yield all([listenForGetTableData()])
}
