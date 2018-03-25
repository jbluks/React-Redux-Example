import { connect } from 'react-redux'
import {
  increment,
  decrement,
  setNumber,
  randomNumber,
  fetchNumber
} from '../redux/actions'
import App from '../components/App'

const mapStateToProps = (state) => ({
  counter: state.counter
})

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
  },
  fetchNumber: (max) => {
    dispatch(fetchNumber(max))
  }
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App)