import { BotaoAdicionarNovo } from "../../UI/Botao/BotaoAdicionarNovo";
import TipoUsuario from "../TipoUsuario";

function Adicionar() {
    return (
        <div className="bloco-adicionarBuscar__container">
            <TipoUsuario nome="Coordenadores" />
            <BotaoAdicionarNovo>Adicionar</BotaoAdicionarNovo>
        </div>
    );
}

export default Adicionar;
