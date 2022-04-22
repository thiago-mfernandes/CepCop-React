import { BotaoAdicionarNovo } from "../../UI/Botao/BotaoAdicionarNovo";
import Container from "../Container";
import TipoUsuario from "../TipoUsuario";

function Adicionar() {
    return (
        <Container> {/*verificar a questao da linha depois..*/}
            <TipoUsuario nome="Coordenadores" />
            <BotaoAdicionarNovo>Adicionar</BotaoAdicionarNovo>
        </Container>
    );
}

export default Adicionar;
