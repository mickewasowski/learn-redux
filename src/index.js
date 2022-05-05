import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';



//STORE -> globalized state
//const store = createStore(counter);

//ACTION -> describes what you want to do; a function that returns an object with a name(type)
const increment = () => {
  return {
    type: 'INCREMENT' //name is usually type
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT' //name is usually type
  }
}

//REDUCER -> describes how the actions transform the state into the next state
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      break;
  }
}

const store = createStore(counter);

//DISPLAY IT IN THE CONSOLE
store.subscribe(() => console.log(store.getState())); //adds a change listener. called every time an action is dispatched

//DISPATCH -> the way we execute the actions
store.dispatch(increment());
store.dispatch(decrement());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


