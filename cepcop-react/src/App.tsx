import './App.css';
import Cabecalho from './components/Cabecalho';
import { GlobalStyle } from './components/GlobalStyle';
import Acoes from './components/Acoes/';
import Rodape from './components/Rodape/';

//mockar o dado do usuario

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Cabecalho userName={'Hudson'} />
      <Acoes />
      <Rodape />
    </div>
  );
}

export default App;
