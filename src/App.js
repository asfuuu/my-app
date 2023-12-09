
import {useState} from 'react'
import './App.css';
import User from './User'
import Profile from './Profile';
import React from 'react';
function App() {
 
 const [name,setName]=useState("asfand")
 const [data,setData]=useState("asfand")
 const [status,setStatus]=React.useState(true);
 function updateData(){
 setData("peter")
 }
 return (
    
 
 
 
    <div className="App">
      {
    status? <h3>Hello react</h3>:null
      }
      
    <h1>{data}</h1>
    <h2>{name}</h2>
    <User />
    <Profile  name="Asfand" Email="test@gmail.com"></Profile>
    <button onClick={updateData}>Click Me</button>
    <br />
    <button onClick={()=>{setName("Samar")}}>Click Button</button>


<button onClick={()=>{setStatus(!status)}}>Toggle</button>
    </div>
 );
  }

export default App;
