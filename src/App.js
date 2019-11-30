import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage.jsx'
import Header from './components/header.jsx'

function App() {
  return (
    <div className="App">
      <Homepage />
      <Header text="This is a header!" />
    </div>
  );
}

export default App;
