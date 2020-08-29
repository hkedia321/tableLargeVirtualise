import { call, put, takeLatest, fork, takeEvery } from 'redux-saga/effects';
import { fetchJsonWrapper } from './asyncWrappers/fetchJsonWrapper';
import { REQUEST_TABLE_DATA, SUCCESS_TABLE_DATA, ERROR_TABLE_DATA } from '../actions/actionTypes';

const BASE_URL = "https://clarisights-users.s3.eu-central-1.amazonaws.com"; 

export function* fetchData(action) {
    try {
        let endpoint = BASE_URL + '/frontend-assignment/1000+items+table+response.json';
        const receivedData = yield call( fetchJsonWrapper, endpoint );
        if ( receivedData.ok ) {
          yield put({
            type: SUCCESS_TABLE_DATA,
            payload: { data: receivedData }
          });
        } else {
          throw receivedData;
        }
      } catch(err) {
        yield put({
          type: ERROR_TABLE_DATA,
          payload: { error: err, failedAction: action }
        });
      }
}

export function* listenForGetTableData() {
    yield takeEvery( REQUEST_TABLE_DATA, fetchData );
  }