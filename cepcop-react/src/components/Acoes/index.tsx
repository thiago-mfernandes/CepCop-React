import Adicionar from "./Adicionar";
import Buscar from "./Buscar/Index";
import Rodape from "../Rodape";
import Tabela from "../Tabela";
import { CardAcoes, SecaoAcoes } from "./stylesAcoes";

export default function Acoes() {
    return (
        <main>
            <CardAcoes>
                <SecaoAcoes>
                    <Adicionar />
                    <Buscar />
                </SecaoAcoes>
                <Tabela />
            </CardAcoes>
            <Rodape />
        </main>
    );
}
