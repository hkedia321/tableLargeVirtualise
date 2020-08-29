import {listenForGetTableData} from './tableData';
import { all } from 'redux-saga/effects'
  
export default function* rootSaga() {
  yield all([
    (listenForGetTableData()),
  ]); 
}