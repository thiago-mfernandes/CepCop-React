import './App.css';
import Cabecalho from './components/Cabecalho';
import { GlobalStyle } from './components/GlobalStyle';
import Acoes from './components/Acoes/';

//mockar o dado do usuario

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Cabecalho userName={'Hudson'} />
      <Acoes />
    </div>
  );
}

export default App;
