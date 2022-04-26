import {
    brancoBg,
    azulMedioBrilhante,
    cinzaMedio,
    cinzaEscuro,
} from "./../UI/variaveis";
import styled from "styled-components";

export const StyledTabelaContainer = styled.table`
    background-color: rgba(231, 231, 233, 0.7);
    border-radius: 12px 12px 0 0;
    box-shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.15);
    margin: 1.5% 1.5% 5%;
    //overflow para o border-radius aparecer;
    overflow: hidden;
    table-layout: fixed;
    width: 97%;
    word-wrap: break-word;

    //--------------------------------------------------->
    @media screen and (max-width: 768px) {
        display: block;
        width: 95%;
        margin: 0 auto;
    }
`;

export const StyledTabelaHeader = styled.thead`
    height: 5vh;

    //--------------------------------------------------->
    @media screen and (max-width: 768px) {
        display: none;
        width: 100%;
    }
`;

export const StyledTabelaRow = styled.tr`
    color: ${brancoBg};
    font-size: 0.75rem;
    background-color: rgba(18, 18, 224, 0.7);
    text-align: center;
    &___tr:nth-of-type(even) {
        color: $cinza-escuro;
    }

    //--------------------------------------------------->
    @media screen and (max-width: 768px) {
        display: block;
        width: 100%;
    }
`;

export const StyledTabelaRowTh = styled.th`
    font-family: "Fjalla One", sans-serif;
    padding: 0.25%;
    vertical-align: middle;
`;

export const StyledTabelaBody = styled.tbody`
    @media screen and (max-width: 768px) {
        display: block;
        width: 100%;
    }
`;

export const StyledTabelaBodyTr = styled.tr`
    color: ${azulMedioBrilhante};
    font-size: 1rem;
    border-bottom: 1px solid ${cinzaMedio};

    //--------------------------------------------------->
    @media screen and (max-width: 768px) {
        display: block;
        width: 100%;
        margin: 5% 0;
        border-bottom: 3px solid ${azulMedioBrilhante};
    }

    &:nth-of-type(even) {
        color: ${cinzaEscuro};
    }
`;
