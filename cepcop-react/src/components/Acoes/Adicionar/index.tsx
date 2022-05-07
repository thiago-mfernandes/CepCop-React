import BotaoAdicionarNovo from "../../UI/Botao/BotaoAdicionarNovo";
import Container from "../Container";
import TipoUsuario from "../TipoUsuario";

function Adicionar() {
    return (
        <Container borderBottom="1px solid #c4c4c4" paddingBottom="2.5%">
            <TipoUsuario nome="Coordenadores" />
            <BotaoAdicionarNovo conteudoBotao="Adicionar"/>
        </Container>
    );
}

export default Adicionar;
