import React from 'react';
import './App.css';
import Homepage from './components/homepage.jsx';
import Header from './components/header.jsx';
import AltPicture from './components/altpicture.jsx';
import Text from './components/text.jsx';

function App() {
  return (
    <div className="App">
      <Homepage />
          <Header text="This is a header!" />
          <Text text= "This is some text." />
      <AltPicture source="https://www.petmd.com/sites/default/files/senior-golden-retriever-with-ball-picture-id488657289.jpg" newAlt="This is a picture of a dog" />
    </div>
  );
}

export default App;
