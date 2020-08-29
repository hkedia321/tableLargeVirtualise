import {listenForGetTableData} from './tableData';
import {fork, call, put, all, take} from 'redux-saga/effects'
  
  /*
  * @description This is our entry function.
  * It's fired in store/configureStore after middleware is applied */
  export default function* rootSaga() {
    yield all([
      (listenForGetTableData()),
    ]); // fork the sagas we want to init at application `firstload`
  }