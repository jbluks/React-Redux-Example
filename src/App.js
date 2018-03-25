import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    console.log(this.props)
    return (
        <div className="App">
          <h1>Counter: {this.props.counter} </h1>
          <button onClick={this.props.increment}>Increment</button>
          <button onClick={this.props.decrement}>Decrement</button>
          <div>
            <input type="text" ref={self => this.number = self}/>
            <button onClick={()=> {
              this.props.setNumber(Number(this.number.value))
            }}>Set Number</button>
          </div>
          <button onClick={              this.props.randomNumber
          }>Random Number</button>
        </div>
    );
  }
}

// STEP 6: Define action functions (creators) that will
// return an object that represents an action. An action
// can have 'payload' data with it that can be accessed
// in the reducer
const increment = () => ({
  type: 'INCREMENT'
})

const decrement = () => ({
  type: 'DECREMENT'
})

// For this action, pass along a number to
// update the state with
const setNumber = (number) => ({
  type: 'SET_NUMBER',
  number
})

const randomNumber = () => ({
  type: 'RANDOM_NUMBER'
})

// STEP 7: Map state from the store to props
// that this component will receive on props
const mapStateToProps = (state) => ({
  counter: state.counter
})

// STEP 8: Map dispatched actions to
// props that will be used by this component
const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch(increment())
  },
  decrement: () => {
    dispatch(decrement())
  },
  setNumber: (number) => {
    dispatch(setNumber(number))
  },
  randomNumber: () => {
    dispatch(randomNumber())
  }
})

// STEP 9: Use the connect function to create
// a redux aware component using the state and
// dispatches mapped above.
const AppContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(App)

export default AppContainer;
