import styled from "styled-components";
import {
    brancoBg,
    cinzaEscuro,
} from "../variaveis";

export const BotaoFecharModal = styled.div`
    color: ${brancoBg};
    font-size: 1rem;
    height: 50px;
    width: 50px;
    position: absolute;
    top: 5px;
    right: 5px;
    border-radius: 50%;
    border: 2px solid ${brancoBg};
    background-color: ${cinzaEscuro};
    box-shadow: -3px 5px 15px 0px rgba(0, 0, 0, 0.45);
    cursor: pointer;

    //--------------------------------------------------->
    @media screen and (max-width: 768px) {
        height: 40px;
        width: 40px;
        position: absolute;
        right: 10px;
        top: 10px;
    }
`;