import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";
import axios from 'axios'
import EmpDetail from './components/EmpDetail';

function App() {

  return(
    <div>
      <EmpDetail/>
  </div>
  )
  
}

export default App;
