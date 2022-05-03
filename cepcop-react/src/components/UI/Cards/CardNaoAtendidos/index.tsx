import Container from "../CardAtendidos/Container";
import Quantidade from "../Quantidade/Quantidade";
import TituloGenerico from "../Titulos/TituloGenerico";
import IconCancel from "./IconCancel";
import { StyledCardNaoAtendidos } from "./styled";

function CardNaoAtendidos() {
    return (
        <StyledCardNaoAtendidos>
            <TituloGenerico conteudo="Não Atendidos:" />
            <Container>
                <IconCancel />
                <Quantidade quantidade={5} />
                {/* mockar os dados */}
            </Container>
        </StyledCardNaoAtendidos>
    );
}

export default CardNaoAtendidos;
