import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';


const redux = () => {
  const initialState = { value: 0 }
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'increment':
        return { value: state.value + 1 }
      case 'decrement':
        return { value: state.value - 1 }
      default:
        return state
    }
  }
  let store = createStore(counterReducer)

  store.subscribe(() => console.log(store.getState()))

  store.dispatch({ type: 'increment' })
  store.dispatch({ type: 'increment' })
  store.dispatch({ type: 'decrement' })
}
redux()
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
