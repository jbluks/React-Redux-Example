import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Import the needed Redux Libraries
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
  counter: 0
}

// STEP 1: Create a reducer that will handle the changes
// to the store.
const CounterReducer = (state = initialState, action) => {
  // STEP 2: Create actions for everything in the store that 
  // we want to chnage
  switch(action.type) {
    case 'INCREMENT':
      // STEP 3: Every action will update a part of the state and return
      // the new state. To be safe, we will use the spread operator
      // to return any other parts of the state that we haven't
      // modified.
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      }
    case 'SET_NUMBER':
      return {
        ...state,
        counter: action.number
      }
    case 'RANDOM_NUMBER':
      return {
        ...state,
        counter: Math.floor(Math.random()*100)
      }
    default:
      return state
  }
}

// STEP 4: Create the store and initialize it with our reducer
const store = createStore(CounterReducer)

ReactDOM.render(
// STEP 5: Wrap our app in a provider that will pass the store down
// so that every component has access to the store if necessary
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
