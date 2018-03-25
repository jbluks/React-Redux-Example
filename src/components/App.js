import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h1>Counter: {this.props.counter} </h1>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
        <div>
          Enter a Number:
          {' '}
          <input type='text' ref={self => (this.number = self)} />
          <button
            onClick={() => {
              this.props.setNumber(Number(this.number.value))
            }}
          >
            Set Number
          </button>
        </div>
        <div>
          <button onClick={this.props.randomNumber}>Random Number</button>
        </div>
        <div>
          Enter a Maximum:
          {' '}
          <input type='text' ref={self => (this.max = self)} />
          <button
            onClick={() => {
              this.props.fetchNumber(Number(this.max.value))
            }}
          >
            Get Number
          </button>
        </div>
      </div>
    )
  }
}

export default App
