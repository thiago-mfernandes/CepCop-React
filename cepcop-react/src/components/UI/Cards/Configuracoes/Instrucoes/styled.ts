import { cinzaEscuro, vermelhoPadrao } from "src/components/UI/variaveis";
import styled from "styled-components";

export const StyledInstrucoes = styled.p`
    color: ${cinzaEscuro};
    font-size: 1rem;
    margin: 1% 0;
    text-align: left;
    width: 100%;

    & span {
        color: ${vermelhoPadrao};
    }
`;
