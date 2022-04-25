import { branco } from "./../variaveis";
import { cinzaEscuro } from "src/components/UI/variaveis";
import styled from "styled-components";

export const Container = styled.div`
    color: ${cinzaEscuro};
    font-size: 0.75rem;
    font-style: italic;
    font-weight: lighter;
    height: 4vh;
    width: 10%;
    background-color: ${branco};
    border-radius: 16px;
    margin: 0 5%;
    padding: 0.75%;
    text-align: center;

    //----------------------------------------------->
    @media screen and (max-width: 768px) {
        height: 4vh;
        width: 10%;
    }
`;
