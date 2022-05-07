import Cabecalho from "src/components/Cabecalho";
import { GlobalStyle } from "src/components/GlobalStyle";
import CardConfiguracoes from "../components/UI/Cards/Configuracoes/Index";

export default function Configuracoes() {
    return (
        <div className="App">
            <GlobalStyle />
            <Cabecalho userName={"teste 1"} />
            <CardConfiguracoes />
        </div>
    );
}
