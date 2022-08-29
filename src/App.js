import React from "react";
import { useState } from "react";
import "./App.css";
import{Welcome} from "./Components/Welcome";
import{Counter} from "./Components/Counter";
import {Input} from "@material-ui/core";


function App() {
  const[value, setValue]= useState();
  const handleChangeInput =(event)=>{
    setValue(event.target.value);
  };
 
  
  return (
    <div className="App">
    <Welcome name={value}/>
    <Input onChange={handleChangeInput}/>
    <Counter/>
  
    
    </div>
  );
  }

export default App;
