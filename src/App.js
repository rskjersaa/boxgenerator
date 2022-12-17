import logo from './logo.svg';
import { useState } from 'react'
import './App.css';
import Form from'./components/Form';
import Display from './components/Display';
import BonusDisplay from'./components/BonusDisplay';
import BonusForm from './components/BonusForm';


function App() {

  const[boxColorArray, setBoxColorArray] = useState([]);
  const[bonusBoxColorArray, setBonusBoxColorArray] = useState ([]);
  return (
    <div className="App">
      <h1>Box Generator</h1>
      <Form boxColorArray={boxColorArray} setBoxColorArray={setBoxColorArray}/>
      <Display boxColorArray={boxColorArray}/>

      <hr/>

      <h1 style ={{color:"blue"}}>Bonus</h1>
      <BonusForm bonusBoxColorArray = {bonusBoxColorArray} setBonusBoxColorArray = {setBonusBoxColorArray}/>
      <BonusDisplay bonusBoxColorArray = {bonusBoxColorArray}/>
    </div>
  );
}

export default App;
