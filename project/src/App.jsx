// import logo from './logo.svg';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx';
import React,{useState} from 'react';
import './App.css';

// function App() {
//   const [name, setName] = useState(0);
//   function increment(){
//     setName(name+1)
//   }
//   function decrement(){
//     setName(name-1)
//   }
//   return (
//   <div className="App">
//    <h1>innitial value {name} </h1>
//    <button onClick={ () => increment() }>+</button>
//    <button onClick={ () => decrement() }>-</button>

//   </div>
//       );
// }




 const App=()=>{
  const[aman,setAman]=useState("");
  const clickhand=(event)=>{
    
    setAman(aman.concat(event.target.value))
  }
  const clearDisplay=()=>{
    setAman("");
  }
  const calcu=()=>{
    setAman(eval(aman));
  }
  return(
    <div className='calc'>
        <input type="text" placeholder="0" id='answer' value={aman} />
        <input type="button" value= "9" className='btn' onClick={clickhand} />
        <input type="button" value= "8" className='btn' onClick={clickhand}/>
        <input type="button" value= "7" className='btn' onClick={clickhand}/>
        <input type="button" value= "6" className='btn' onClick={clickhand}/>
        <input type="button" value= "5" className='btn' onClick={clickhand}/>
        <input type="button" value= "4" className='btn' onClick={clickhand}/>
        <input type="button" value= "3" className='btn' onClick={clickhand}/>
        <input type="button" value= "2" className='btn' onClick={clickhand}/>
        <input type="button" value= "1" className='btn' onClick={clickhand}/>
        <input type="button" value= "0" className='btn' onClick={clickhand}/>
        <input type="button" value= "." className='btn' onClick={clickhand}/>
        <input type="button" value= "+" className='btn' onClick={clickhand}/>
        <input type="button" value= "-" className='btn' onClick={clickhand}/>
        <input type="button" value= "*" className='btn' onClick={clickhand}/>
        <input type="button" value= "/" className='btn' onClick={clickhand}/>
        <input type="button" value= "%" className='btn' onClick={clickhand}/>
        <input type="button" value= "clear" className='btn btn1' onClick={clearDisplay} />
        <input type="button" value= '=' className=' btn btn1' onClick={calcu}/>
    </div>
  )
 }
 export default App;