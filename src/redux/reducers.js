const initialState = {
  counter: 0
}

export const CounterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
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