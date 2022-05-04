import { cinzaClaro, cinzaEscuro, cinzaMedio } from "src/components/UI/variaveis";
import styled from "styled-components";

export const StyledConfigPage = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(8, 1fr);
    gap: 16px;
    padding: 5% 2.5%;

    //------------------------------------------------------>
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 90%;
        margin: 0 auto;
    }
`;

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-family: "Fjalla-One", sans-serif;
    background-color: ${cinzaClaro};
    border-radius: 16px;
    box-shadow: 0 4px 50px 0 rgba(0, 0, 0, 0.1);
    padding: 2% 5% 7.5%;

    //posicionamento de cada filho no desktop:
    //------------------------------------------------//
    &:first-of-type {
        grid-column: 1 / 2;
        grid-row: 1 / 5;
    }

    &:nth-of-type(2) {
        grid-column: 1 / 2;
        grid-row: 5 / 8;
    }

    &:nth-of-type(3) {
        grid-column: 2 / 3;
        grid-row: 1 / 4;
    }

    &:nth-of-type(4) {
        grid-column: 2 / 3;
        grid-row: 4 / 7;
    }

    &:last-of-type {
        grid-column: 2 / 3;
        grid-row: 7 / 9;
    }
    //---------------------------------------------------->
    @media screen and (max-width: 768px) {
        margin: 5% 0;
    }
`;

export const StyledCardConfigHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${cinzaMedio};
    padding-bottom: 2.5%;
    margin-top: 5%;
    width: 100%;
`;

export const StyledTitulo = styled.h3`
    color: ${cinzaEscuro};
    font-size: 1.25rem;
`;

export const StyledIconDefault = styled.i`
    color: ${cinzaEscuro};
    font-size: 1.5rem;
    padding: 0;
`;

export const StyledBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-between;
    margin: 1% 0;
    width: 100%;
`;