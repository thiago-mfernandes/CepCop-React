import { cinzaClaro } from "src/components/UI/variaveis";
import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-family: "Fjalla-One", sans-serif;
    background-color: ${cinzaClaro};
    border-radius: 16px;
    box-shadow: 0 4px 50px 0 rgba(0,0,0,.1);
    padding: 2% 5% 7.5%;

    //posicionamento de cada filho no desktop:
    //------------------------------------------------//
    &:first-of-type{
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