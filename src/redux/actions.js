export const ActionTypes = {
  increment: 'INCREMENT',
  decrement: 'DECREMENT',
  setNumber: 'SET_NUMBER',
  randomNumber: 'RANDOM_NUMBER',
  fetchNumber: 'FETCH_NUMBER',
  fetchNumberSuccess: 'FETCH_NUMBER_SUCCEEDED',
  fetchNumberFailed: 'FETCH_NUMBER_FAILED'
}

export const increment = () => ({
  type: ActionTypes.increment
})

export const decrement = () => ({
  type: ActionTypes.decrement
})

export const setNumber = (number) => ({
  type: ActionTypes.setNumber,
  number
})

export const randomNumber = () => ({
  type: ActionTypes.randomNumber
})

export const fetchNumber = (max) => ({
  type: ActionTypes.fetchNumber,
  max
})

export const fetchNumberFailed = () => ({
  type: ActionTypes.fetchNumberFailed
})