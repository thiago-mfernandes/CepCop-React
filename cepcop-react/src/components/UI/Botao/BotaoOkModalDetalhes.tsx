import styled from "styled-components";
import { azulEscuroFosco } from "../variaveis";
import { Abstract } from "./Absctrat";

const StyledBotaoOkModalDetalhes = styled(Abstract)`
    width: 50%;
    border: none;
    border-radius: 24px;
    margin: 0 auto;
    transition: all 0.3s ease-in-out;
    &:hover {
        font-size: 0.95rem;
        width: 70%;
        border: 1px solid ${azulEscuroFosco};
        transition: all 0.3s ease-in-out;
    }
    @media screen and (max-width: 768px) {
        height: 4vh;
        width: 70%;
        margin: 10% auto 5%;
        &:hover {
            height: 4vh;
            width: 70%;
        }
    }
`;

export default function BotaoOkModalDetalhesotaoLogin() {
    return <StyledBotaoOkModalDetalhes></StyledBotaoOkModalDetalhes>;
}
