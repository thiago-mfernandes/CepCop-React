import styled from "styled-components";
import { azulEscuroFosco, branco } from "../UI/variaveis";
const BotaoPadrao = styled.button `
    color: ${branco};
    font-size: 0.75rem;
    height: 6vh;
    width: 75%;
    background: linear-gradient(
        90deg,
        rgba(18, 18, 224, 1) 0%,
        rgba(109, 225, 149, 1) 100%
    );
    border: none;
    border-radius: 24px;
    box-shadow: 4px 10px 20px 0 rgba(10, 10, 132, 0.35);
    margin-left: 10%;
    transition: all 0.3s ease-in-out;

    &:hover {
        color: ${branco};
        font-size: 0.95rem;
        height: 6vh;
        width: 85%;
        border: 1px solid ${azulEscuroFosco};
        transition: all 0.3s ease-in-out;
    }
`;
export const BotaoAdicionar = styled(BotaoPadrao) `
    font-size: 1.25rem;
    margin: 2.5% auto;
    &:hover {
        font-size: 1.5rem;
    }
`;
export const BotaoAdicionarForm = styled(BotaoPadrao) `
    margin-left: 0;
    margin: 2.5% auto;
`;
//# sourceMappingURL=styledButtons.js.map