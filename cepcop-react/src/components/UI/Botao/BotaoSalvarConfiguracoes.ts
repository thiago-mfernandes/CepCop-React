import styled from "styled-components";
import { azulEscuroFosco } from "../variaveis";
import { Abstract } from "./Absctrat";

export const BotaoSalvarConfiguracoes = styled(Abstract)`
    margin-left: 0;
    margin: 6.5% auto 0;
    &:hover {
        border: 1px solid ${azulEscuroFosco};
        transition: all 0.3s ease-in-out;
    }
`;
