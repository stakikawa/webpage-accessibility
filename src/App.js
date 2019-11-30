import React from 'react';
import './App.css';
import Homepage from './components/homepage.jsx';
import Header from './components/header.jsx';
import AltPicture from './components/altpicture.jsx';

function App() {
  return (
    <div className="App">
      <Homepage />
      <Header text="This is a header!" />
      <AltPicture source="https://www.petmd.com/sites/default/files/senior-golden-retriever-with-ball-picture-id488657289.jpg" newAlt="This is a picture of a dog" />
    </div>
  );
}

export default App;
