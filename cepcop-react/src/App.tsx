import './App.css';
import Cabecalho from './components/Cabecalho';
import { GlobalStyle } from './components/GlobalStyle';

//mockar o dado do usuario

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Cabecalho name={'Hudson'} />
    </div>
  );
}

export default App;
