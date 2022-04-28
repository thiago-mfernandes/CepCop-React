import styled from "styled-components";
import { azulEscuroFosco } from "../variaveis";
import { Abstract } from "./Absctrat";

export const BotaoVerAvaliacoes = styled(Abstract)`
    width: 50%;
    border: none;
    border-radius: 24px;
    margin-top: 10%;
    &:hover {
        font-size: 0.75rem;
        width: 70%;
        border: 1px solid ${azulEscuroFosco};
        transition: all 0.3s ease-in-out;
    }

    //-------------------------------------------------------->
    @media screen and (min-width: 768px) {
        height: 4vh;
        width: 35%;
        margin-top: 0;
        margin-left: 5%;

        //---------------------------------------------------->
        &:hover {
            height: 4vh;
            width: 35%;
        }
    }
`;
