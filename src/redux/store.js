import { createStore, applyMiddleware } from 'redux'
import { CounterReducer } from './reducers'
import createSagaMiddleware from 'redux-saga'
import myEffects from './effects'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  CounterReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(myEffects)

export default store