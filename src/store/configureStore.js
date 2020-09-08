import { createStore, compose, applyMiddleware } from "redux"
import rootReducer from "reducers"
import createSagaMiddleware from "redux-saga"
import { logger } from "redux-logger"
import rootSaga from "sagas/index"
import initialState from "./initialState"

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(sagaMiddleware, logger))
  )
  sagaMiddleware.run(rootSaga)
  return store
}
