import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import Cabecalho from './components/Cabecalho';
import { GlobalStyle } from './components/GlobalStyle';
import Acoes from './components/Acoes/';
//mockar o dado do usuario
function App() {
    return (_jsxs("div", Object.assign({ className: "App" }, { children: [_jsx(GlobalStyle, {}), _jsx(Cabecalho, { userName: 'Hudson' }), _jsx(Acoes, {})] })));
}
export default App;
//# sourceMappingURL=App.js.map