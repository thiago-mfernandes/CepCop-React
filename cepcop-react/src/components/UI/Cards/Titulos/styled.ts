import styled from "styled-components";
import { branco, cinzaClaro, cinzaEscuro } from "../../variaveis";

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
