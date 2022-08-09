import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';

function App() {
const [counter, setCounter] = useState(1)
window.setCounter = setCounter
return (

  <h1>{counter}</h1>

  );
}

export default App;
