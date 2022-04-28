import styled from "styled-components";
import { azulEscuroFosco, branco } from "../variaveis";
import { Abstract } from "./Absctrat";

export const BotaoAdicionarNovo = styled(Abstract)`
    height: 6vh;
    width: 15%;

    &:hover {
        color: ${branco};
        font-size: 0.95rem;
        height: 6vh;
        width: 17.5%;
        border: 1px solid ${azulEscuroFosco};
        transition: all 0.3s ease-in-out;
    }

    //---------------------------------------------->
    @media screen and (max-width: 768px) {
        height: 4vh;
        width: 30%;
        margin-right: 5%;

        &:hover {
            height: 4vh;
            width: 30%;
        }
    }
`;
