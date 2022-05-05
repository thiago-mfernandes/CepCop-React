import styled from "styled-components";
import { azulEscuroFosco, cinzaEscuro } from "../variaveis";
//uso o nome container pra nao ter conflito no .tsx
export const Container = styled.input`
    height: 6.5vh;
    width: 30%;
    color: ${cinzaEscuro};
    font-size: 0.75rem;
    font-style: italic;
    font-weight: lighter;
    border: none;
    border-radius: 24px;
    padding-left: 5%;
    margin: 1.5% 0 1.5% 5%;
    &:focus {
        border: 1px solid ${azulEscuroFosco};
        outline: none;
    }
    @media screen and (max-width: 768px) {
        height: 5vh;
        width: 50%;
    }
`;

export const StyledInputForm = styled(Container)`
    margin: 0;
    margin-bottom: 5%;
    width: 100%;
`;

export const StyledInputRadio = styled(Container)`
    margin-bottom: 2.5%;
`;

export const StyledInputAlterar = styled(Container)`
    margin: 0 auto;
    margin-bottom: 1%;
    width: 90%;
    &:last-of-type {
        margin-bottom: 5%;
    }

    //-------------------------------------------------------->
    @media screen and (max-width: 768px) {
        margin-bottom: 3%;
    }
`;

export const StyledInputEscolherArquivo = styled(Container)`
    border-radius: 0 24px 24px 0;
    margin: 0;
    width: 100%;
`;

export const StyledInputLogin = styled(Container)`
    margin: 0;
    margin-bottom: 2%;
    width: 95%;
    height: 6.5vh;
`;
