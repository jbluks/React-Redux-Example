import { call, put, takeLatest } from 'redux-saga/effects'
import { ActionTypes, setNumber, fetchNumberFailed } from './actions'

// Dummy Api Handler for making asynchronous fetches
const FetchNumberApi = {
  fetchNumber: async (max) => {
    return new Promise((resolve, reject) => {
      //do something asynchronous then return a number
      setTimeout(() => {
        const num = Math.floor(Math.random()*max)
        resolve(num)
      }, 500)
    })
  }
}

// worker Saga: Will fetch a number asynchronously
function* fetchNumber(action) {
  try {
     const number = yield call(FetchNumberApi.fetchNumber, action.max);
     yield put(setNumber(number));
  } catch (e) {
     yield put(fetchNumberFailed(e));
  }
}

// Connect saga to action. There can be any number of sagas here
function* myEffects() {
  yield takeLatest(ActionTypes.fetchNumber, fetchNumber);
}

export default myEffects