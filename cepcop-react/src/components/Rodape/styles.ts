import { branco } from "./../UI/variaveis";
import { cinzaEscuro } from "src/components/UI/variaveis";
import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 8vh;
    width: 100%;
    background-color: rgba(196, 196, 196, 0.7);
    grid-column: 2 / 3;
`;

export const StyledFooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 30%;
    padding: 0 2%;

    //---------------------------------------------------------->
    @media screen and (max-width: 768px) {
        height: 100%;
        width: 300%;
        padding: 0;
        margin-right: 2.5%;
    }
    &:first-of-type {
        align-items: center;
        justify-content: flex-start;
        height: 100%;
        width: 50%;
        //------------------------------------------------------->
        @media screen and (max-width: 768px) {
            height: 100%;
            width: 70%;
        }
    }
`;

export const StyledFooterInfo = styled.p`
    color: ${cinzaEscuro};
    font-size: 0.75rem;
    font-style: italic;
    font-weight: lighter;
    margin: 0 2%;

    //---------------------------------------------------------->
    @media screen and (max-width: 768px) {
        font-size: 0.7rem;
    }
`;

export const StyledFooterCaixaExibir = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    height: 4vh;
    width: 20%;
    border: none;
    background-color: ${branco};
    border-radius: 16px;

    //------------------------------------------------------->
    @media screen and (max-width: 768px) {
        height: 2vh;
        width: 8vw;
    }
`;
