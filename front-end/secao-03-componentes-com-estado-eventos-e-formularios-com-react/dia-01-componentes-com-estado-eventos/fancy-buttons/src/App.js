import React from 'react';
import './App.css';



class App extends React.Component {
  // decalrada as funçoes fora do RENDER
  handleButtonOne = () => {
    console.log('Clicou no botão 1!');
  }
  handleButtonTwo = () => {
    console.log('Clicou no botão 2!');
  }
  
  handleButtonThree = () => {
    console.log('Clicou no botão 3!');
  }

  render() {
    return (
    <div className="App">
    <button onClick={ this.handleButtonOne }>Botão 1</button>
    <button onClick={ this.handleButtonTwo }>Botão 2</button>
    <button onClick={ this.handleButtonThree }>Botão 3</button>
    </div>
    );
  }
}

export default App;
