import React from 'react';
import './App.css';
import Image from './Image';

class App extends React.Component {
  render() {
    const URL = "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg";
    return (

      <main>
        <Image source={ URL } alternativeText="Cute cat staring"/>
      </main>
    );
  }
}

export default App;
