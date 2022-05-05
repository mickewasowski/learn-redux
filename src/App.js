import React from "react";
import { useSelector, useDispatch } from 'react-redux'; // this way we can access anything from the store
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <h3>IsLogged: {isLogged ? 'yes' : 'no'}</h3>
    </div>
  );
}

export default App;
