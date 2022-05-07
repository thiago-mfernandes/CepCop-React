import Acoes from "src/components/Acoes";
import Cabecalho from "src/components/Cabecalho";
import { GlobalStyle } from "src/components/GlobalStyle";

export default function Atendimentos() {
    return (
        <div className="App">
            <GlobalStyle />
            <Cabecalho userName={"teste 1"} />
            <Acoes />
        </div>
    );
}
