import { branco, cinzaClaro, cinzaEscuro, cinzaMedio } from "./../../variaveis";
import styled from "styled-components";

export const StyledCardHoje = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${branco};
    box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.15);
    border-radius: 24px;
    grid-column: 1 / 2;
    grid-row: 1 / 4;
    width: 100%;

    //--------------------------------------------->
    @media screen and (max-width: 768px) {
        grid-column: 1 / 5;
        grid-row: 1 / 3;
    }
`;

export const StyledTituloGenerico = styled.h2`
    color: ${cinzaEscuro};
    font-size: 1rem;
    background-color: rgba(231, 231, 233, 0.5);
    border-radius: 24px 24px 0 0;
    height: 10vh;
    padding: 10% 0;
    text-align: center;

    //--------------------------------------------->
    @media screen and (max-width: 768px) {
        height: 5vh;
        padding: 10% 0 0;
        font-size: 0.8rem;
        vertical-align: text-bottom;
    }
`;

export const StyledTituloCardHoje = styled(StyledTituloGenerico)`
    color: ${cinzaClaro};
    font-size: 1rem;
    height: 10vh;
    width: 100%;
    background-color: ${cinzaEscuro};
    margin-bottom: 7.5%;
    padding-top: 12.5%;
    vertical-align: baseline;
    //--------------------------------------------->
    @media screen and (max-width: 768px) {
        height: 4vh;
        padding: 2.5% 0;
        vertical-align: middle;
    }
`;

export const StyledTituloCardTotalAnalisantes = styled(StyledTituloGenerico)`
    color: ${branco};
    font-size: 1rem;
    background-color: rgba(18, 18, 224, 0.7);
    padding: 12.5% 0;

    //--------------------------------------------->
    @media screen and (max-width: 768px) {
        padding: 5% 0;
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