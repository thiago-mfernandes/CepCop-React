import { MdDoneOutline } from "react-icons/md";
import Quantidade from "../CardFilaEspera/Quantidade";
import TituloGenerico from "../Titulos/TituloGenerico";
import Container from "./Container";
import { StyledCardAtendidos } from "./styled";

function CardAtendidos() {
    return (
        <StyledCardAtendidos>
            <TituloGenerico conteudo="Atendidos:" />
            <Container>
                <MdDoneOutline style={{
                    color: '#787887',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    padding: 0,
                }} />
                <Quantidade quantidade={5}/>{/* mockar o dado */}
            </Container>
        </StyledCardAtendidos>
    );
}

export default CardAtendidos;
