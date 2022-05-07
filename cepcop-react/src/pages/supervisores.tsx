import Acoes from "src/components/Acoes";
import Cabecalho from "src/components/Cabecalho";
import { GlobalStyle } from "src/components/GlobalStyle";

export default function Supervisores() {
    return (
        <div className="App">
            <GlobalStyle />
            <Cabecalho userName={"teste 2"} />
            <Acoes />
        </div>
    );
}
