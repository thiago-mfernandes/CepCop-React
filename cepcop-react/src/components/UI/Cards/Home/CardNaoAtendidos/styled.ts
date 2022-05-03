import styled from "styled-components";
import { vermelhoPadrao } from "../../../variaveis";

export const StyledCardNaoAtendidos = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${vermelhoPadrao};
    border-radius: 24px;
    box-shadow: 0px 4px 50px 0px rgba(244, 124, 87, .4);
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    width: 100%;

    //----------------------------------------------------------->
    @media screen and (max-width: 768px) {
        grid-column: 3 / 5;
        grid-row: 4 / 5;
        //tratamento especial para o titulo deste card:
        & > .titulo-home-card{
            word-wrap: wrap;
            padding: 0 7.5%;
            padding-top: 5%;
        }
    }
`;