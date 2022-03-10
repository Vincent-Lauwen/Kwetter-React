import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <main className='container'>
        <Home/>
      </main>
    </React.Fragment>
  );
}

export default App;
