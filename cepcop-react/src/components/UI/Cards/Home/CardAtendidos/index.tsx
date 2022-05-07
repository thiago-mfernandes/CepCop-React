import styled from "styled-components";
import { verdePadrao } from "../../../variaveis";
import Quantidade from "../Quantidade/Quantidade";
import TituloGenerico from "../Titulos/TituloGenerico";
import Container from "./Container";
import IconDone from "./IconDone";

const StyledCardAtendidos = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${verdePadrao};
    border-radius: 24px;
    box-shadow: 0px 4px 50px 0px rgba(109, 225, 149, 0.6);
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    width: 100%;
    @media screen and (max-width: 768px) {
        grid-column: 3 / 5;
        grid-row: 3 / 4;
    }
`;

export default function CardAtendidos() {
    return (
        <StyledCardAtendidos>
            <TituloGenerico conteudo="Atendidos:" />
            <Container>
                <IconDone />
                <Quantidade quantidade={5} />
                {/* mockar o dado */}
            </Container>
        </StyledCardAtendidos>
    );
}
