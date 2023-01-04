//import React from 'react';//
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Add from './components/add';
import Edit from './components/Edit';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/create" element={<Add/>}/>
         <Route path="/edit" element={<Edit/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;