import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './reducers/counter'


function App() {
  // const state = useSelector((state) => state)
  // console.log(state)
  // hanya counter
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  console.log(counter)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{counter.value}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </header>
    </div>
  );
}

export default App;
