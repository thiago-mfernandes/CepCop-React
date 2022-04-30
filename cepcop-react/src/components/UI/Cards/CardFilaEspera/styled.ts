import { cinzaEscuro } from 'src/components/UI/variaveis';
import styled from "styled-components";
import { amareloPadrao, cinzaMedio } from "../../variaveis";

export const StyledFilaEspera = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${amareloPadrao};
    border-radius: 24px;
    box-shadow: 0px 4px 50px 0px rgba(251, 255, 64, 0.6);
    grid-column: 2 / 4;
    grid-row: 2 / 4;
    width: 100%;

    //------------------------------------------>
    @media screen and (max-width: 768px) {
        grid-column: 1 / 3;
        grid-row: 3 / 5;
    }
`;

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 5vh;
    width: 100%;
    border-bottom: 1px solid ${cinzaMedio};
    margin: 2.5% 0;
    padding: 7.5% 0;

    //------------------------------------------------------->
    @media screen and (max-width: 768px) {
        justify-content: center;
        border-bottom: none;
        margin: 15% auto;
    }
    &:last-of-type {
        border-bottom: none;
        padding: 5%;

        //---------------------------------------------------->
        @media screen and (max-width: 768px) {
            display: none;
        }
    }
`;

export const StyledQuantidade = styled.p`
    color: ${cinzaEscuro};
    font-size: 2rem;
    font-weight: 700;
`;

export const StyledPessoa = styled.p`
    color: ${cinzaEscuro};
    font-size: 0.75rem;
`;
