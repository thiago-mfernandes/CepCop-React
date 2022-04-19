import React from 'react';
import './App.css';
import Cabecalho from './components/Cabecalho';
import { GlobalStyle } from './components/GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Cabecalho />
    </div>
  );
}

export default App;
