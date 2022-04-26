import styled from "styled-components";
import {
    branco,
} from "../variaveis";

export const BotaoRodapeNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    background-color: ${branco};
    border: none;
    border-radius: 50%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    margin: 0 7.5%;

    &:hover {
        cursor: pointer;
    }

    //----------------->
    @media screen and (max-width: 768px) {
        margin: 0 5%;
    }
`;