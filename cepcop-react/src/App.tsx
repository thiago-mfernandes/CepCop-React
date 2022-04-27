import "./App.css";
// import Cabecalho from "./components/Cabecalho";
// import { GlobalStyle } from "./components/GlobalStyle";
// import Acoes from "./components/Acoes/";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes';
//mockar o dado do usuario

function App() {
    return (
        <Router>
            <Routes />
        </Router>
    );
}

export default App;

// <div className="App">
//   <GlobalStyle />
//   <Cabecalho userName={'Hudson'} />
//   <Acoes />
// </div>
