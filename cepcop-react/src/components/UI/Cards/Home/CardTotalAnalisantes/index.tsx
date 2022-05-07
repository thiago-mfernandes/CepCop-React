import styled from "styled-components";
import { branco } from "src/components/UI/variaveis";
import TotalCadastros from "../Titulos/TotalCadastros";
import Container from "./Container";
import Quantidade from "../Quantidade/Quantidade";
import ContainerTotal from "./ContainerTotal";
import Titulo from "./Titulo";
import ContainerNaoRelacionados from "./ContainerNaoRelacionados";
import IconList from "./IconList";

const StyledTotalAnalisantes = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${branco};
    border-radius: 24px;
    box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.15);
    grid-column: 4 / 5;
    grid-row: 1 / 3;
    width: 100%;
    @media screen and (max-width: 768px) {
        grid-column: 1 / 4;
        grid-row: 5 / 6;
    }
`;

export default function CardTotalAnalisants() {
    return (
        <StyledTotalAnalisantes>
            <TotalCadastros totalCadastros="Total de Analisantes:" />
            <Container>
                <IconList />
                <Quantidade quantidade={31} />
            </Container>
            <ContainerTotal>
                <Titulo titulo="Total de analisantes que não estão na fila:" />
            </ContainerTotal>
            <ContainerNaoRelacionados>
                <IconList />
                <Quantidade quantidade={11} />
            </ContainerNaoRelacionados>
        </StyledTotalAnalisantes>
    );
}
