import styled from "styled-components";
import { vermelhoPadrao } from "../../../variaveis";
import Container from "../CardAtendidos/Container";
import Quantidade from "../Quantidade/Quantidade";
import TituloGenerico from "../Titulos/TituloGenerico";
import IconCancel from "./IconCancel";

const StyledCardNaoAtendidos = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${vermelhoPadrao};
    border-radius: 24px;
    box-shadow: 0px 4px 50px 0px rgba(244, 124, 87, 0.4);
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    width: 100%;
    @media screen and (max-width: 768px) {
        grid-column: 3 / 5;
        grid-row: 4 / 5;
        //tratamento especial para o titulo deste card:
        & > .titulo-home-card {
            word-wrap: wrap;
            padding: 0 7.5%;
            padding-top: 5%;
        }
    }
`;

export default function CardNaoAtendidos() {
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
