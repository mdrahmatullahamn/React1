// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx';
import {useState} from 'react'

function App() {
  const [name, setName] = useState(0);
  function increment(){
    setName(name+1)
  }
  function decrement(){
    setName(name-1)
  }
  return (
  <div className="App">
   <h1>innitial value {name} </h1>
   <button onClick={ () => increment() }>+</button>
   <button onClick={ () => decrement() }>-</button>

  </div>
      );
}

export default App;
