import { call, put, takeLeading } from "redux-saga/effects"
import api from "api"
import {
  REQUEST_TABLE_DATA,
  SUCCESS_TABLE_DATA,
  ERROR_TABLE_DATA,
} from "actions/actionTypes"

const BASE_URL = process.env.REACT_APP_BASE_API_URL

export function* fetchTableData(action) {
  try {
    const endpoint = `${BASE_URL}/frontend-assignment/1000+items+table+response.json`
    const receivedData = yield call(api, endpoint)
    if (receivedData.ok) {
      yield put({
        type: SUCCESS_TABLE_DATA,
        payload: { data: receivedData },
      })
    } else {
      throw receivedData
    }
  } catch (err) {
    yield put({
      type: ERROR_TABLE_DATA,
      payload: { error: err, failedAction: action },
    })
  }
}

export function* listenForGetTableData() {
  yield takeLeading(REQUEST_TABLE_DATA, fetchTableData)
}
