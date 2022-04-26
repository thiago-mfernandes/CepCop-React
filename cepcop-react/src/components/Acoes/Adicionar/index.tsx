import Linha from "src/components/UI/Linha";
import { BotaoAdicionarNovo } from "../../UI/Botao/BotaoAdicionarNovo";
import Container from "../Container";
import TipoUsuario from "../TipoUsuario";

function Adicionar() {
    return (
        <Container borderBottom='1px solid #c4c4c4'> {/*verificar a questao da linha depois..*/}
            <TipoUsuario nome="Coordenadores" />
            <BotaoAdicionarNovo>Adicionar</BotaoAdicionarNovo>
        </Container>
    );
}

export default Adicionar;

