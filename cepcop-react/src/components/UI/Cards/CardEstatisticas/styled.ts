import styled from "styled-components";
import { branco, brancoBg, cinzaEscuro } from "../../variaveis";

export const StyledEstatisticas = styled.section`
    background-color: ${branco};
    border-radius: 24px;
    box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.15);
    grid-column: 1 / 5;
    width: 100%;

    //----------------------------------------------------->
    @media screen and (max-width: 768px) {
        grid-row: 6 / 9;
        box-shadow: 0 4px 50px 0 rgba(0, 0, 0, 0.15);
    }
`;

export const StyledTitulo = styled.p`
    color: ${brancoBg};
    font-size: 1.25rem;
    background-color: ${cinzaEscuro};
    border-radius: 24px 24px 0 0;
    height: 10vh;
    padding: 2.5%;
    margin-bottom: 1.5%;
    text-align: center;

    //-------------------------------------------------->
    @media screen and (max-width: 768px) {
        height: 7.5vh;
    }
`;

export const StyledContainerLegenda = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
`;

export const StyledContainerBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    width: 50%;
`;

//@media screen and (max-width: 768px)
