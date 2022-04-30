import { MdCancel } from "react-icons/md";
import Container from "../CardAtendidos/Container";
import Quantidade from "../CardFilaEspera/Quantidade";
import TituloGenerico from "../CardFilaEspera/TituloGenerico";
import { StyledCardNaoAtendidos } from "./styled";

function CardNaoAtendidos() {
    return (
        <StyledCardNaoAtendidos>
            <TituloGenerico conteudo="Não Atendidos:" />
            <Container>
                <MdCancel
                    style={{
                        color: "#787887",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        padding: 0,
                    }}
                />
                <Quantidade quantidade={5} />
                {/* mockar os dados */}
            </Container>
        </StyledCardNaoAtendidos>
    );
}

export default CardNaoAtendidos;
