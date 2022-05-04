import styled from "styled-components";
import { brancoBg, cinzaEscuro } from "../../variaveis";

export const StyledIconSettings = styled.i`
    color: ${cinzaEscuro};
    font-size: 2rem;
    padding-right: 5%;
    padding-bottom: 2.5%;
`;

export const StyledSection = styled.section`
    height: 95%;
    width: 95%;
    background-color: ${brancoBg};
    border-radius: 48px 48px 8px 8px;
    box-shadow: 4px 4px 20px 0 rgb(0 0 0 / 25%);
    margin: 2.5% auto;

    //------------------------------------------------->
    @media screen and (max-width: 768px) {
        height: 95%;
        width: 100%;
        background-color: unset;
        box-shadow: none;
        border-radius: 16px;
    }
`;
