import styled from "styled-components";
import { verdePadrao } from "../../../variaveis";
import { StyledTituloGenerico } from "../Titulos/styled";

export const StyledCardTurmas = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${verdePadrao};
    border-radius: 24px;
    box-shadow: 0px 4px 50px 0px rgba(109, 225, 149, 0.6);
    grid-column: 4 / 5;
    grid-row: 3 / 4;
    width: 100%;

    //------------------------------------------------------>
    @media screen and (max-width: 768px) {
        grid-row: 5 / 6;
    }
`;

export const StyledTitulo = styled(StyledTituloGenerico)`
    font-size: 1rem;
    padding-left: 5%;
    padding-right: 5%;
`;
