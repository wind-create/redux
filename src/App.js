import logo from './logo.svg';
import './App.css';
import { store } from './store'
import { increment, decrement } from './reducers/counter'



const redux = () => {

  store.subscribe(() => console.log(store.getState()))

  store.dispatch(increment())
  store.dispatch(increment())
  store.dispatch(decrement())
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
