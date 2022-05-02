import { branco, cinzaEscuro, cinzaMedio } from "./../../variaveis";
import styled from "styled-components";

export const StyledCardHoje = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${branco};
    box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.15);
    border-radius: 24px;
    border-bottom: 1px solid ${cinzaMedio};
    grid-column: 1 / 2;
    grid-row: 1 / 4;
    width: 100%;

    //--------------------------------------------->
    @media screen and (max-width: 768px) {
        grid-column: 1 / 5;
        grid-row: 1 / 3;
    }
`;

export const StyledContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    //--------------------------------------------->
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export const StyledContainerData = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${cinzaMedio};
    padding: 0 5%;
    width: 100%;

    //--------------------------------------------->
    @media screen and (max-width: 768px) {
        align-items: flex-start;
        justify-content: center;
        border-bottom: none;
    }
`;

export const StyledData = styled.p`
    color: ${cinzaEscuro};
    font-size: 0.5rem;
    font-style: italic;
    font-weight: lighter;
    padding: 5% 0%;

    //--------------------------------------------->
    @media screen and (max-width: 768px) {
        font-size: 0.75rem;
        padding: 2.5% 0;
    }
`;

export const StyledDiaSemana = styled.p`
    color: ${cinzaEscuro};
    font-size: 1rem;
    font-style: italic;
    font-weight: lighter;
    padding: 5% 0% 10%;

    //--------------------------------------------->
    @media screen and (max-width: 768px) {
        padding: 5% 0 0;
    }
`;

export const StyledContainerTotal = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 5% 0;
    width: 100%;

    //-------------------------------------->
    @media screen and (max-width: 768px) {
        padding: 2.5% 0;
    }
`;

export const StyledTotalCadastros = styled.p`
    font-family: "Lato", sans-serif;
    color: ${cinzaEscuro};
    font-size: 2rem;
    font-weight: bold;

    //--------------------------------------------->
    @media screen and (max-width: 768px) {
        font-size: 2.25rem;
    }
`;

export const StyledPessoaCadastrada = styled.p`
    font-size: 0.9rem;
    padding: 2.5% 0;
    margin: 0 7.5%;

    //--------------------------------------------->
    @media screen and (max-width: 768px) {
        font-size: 1rem;
        text-align: left;
        width: 90%;
    }
`;
