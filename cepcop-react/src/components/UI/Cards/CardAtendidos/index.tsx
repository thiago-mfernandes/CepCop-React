import Quantidade from "../Quantidade/Quantidade";
import TituloGenerico from "../Titulos/TituloGenerico";
import Container from "./Container";
import IconDone from "./IconDone";
import { StyledCardAtendidos } from "./styled";

function CardAtendidos() {
    return (
        <StyledCardAtendidos>
            <TituloGenerico conteudo="Atendidos:" />
            <Container>
                <IconDone />
                <Quantidade quantidade={5}/>{/* mockar o dado */}
            </Container>
        </StyledCardAtendidos>
    );
}

export default CardAtendidos;
