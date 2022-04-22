import styled from "styled-components";
import {
    vermelhoPadrao,
    branco,
} from "../variaveis";
import { Abstract } from './Absctrat';

export const BotaoCancelar = styled(Abstract)`
    color: ${branco};
    font-size: 0.75rem;
    height: 6vh;
    width: 15%;
    background: ${vermelhoPadrao};
    border: none;
    border-radius: 24px;
    box-shadow: 4px 10px 20px 0 rgba(244, 124, 87, 0.2);
    margin-left: 10%;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: ${branco};
        font-size: 0.95rem;
        border: 1px solid darkred;
        transition: all 0.3s ease-in-out;
    }

    //------------------------------------->
    @media screen and (max-width: 768px) {
        height: 4vh;
        width: 15%;
    }
`;
