import { azulMedioBrilhante, brancoBg } from "src/components/UI/variaveis";
import styled from "styled-components";

const StyledButtonEscolherArquivos = styled.button`
    height: 6.5vh;
    width: 35%;
    color: ${brancoBg};
    font-size: 0.85rem;
    font-style: italic;
    font-weight: lighter;
    border: none;
    border-radius: 24px 0 0 24px;
    background-color: ${azulMedioBrilhante};
    &:hover {
        cursor: pointer;
        box-shadow: 4px 0px 10px 3px rgba(18, 18, 224, 0.5);
    }
    @media screen and (max-width: 768px) {
        height: 5vh;
        width: 35%;
    }
`;

export default function BotaoEscolherArquivo() {
    return (
        <StyledButtonEscolherArquivos>
            Escolher Arquivo
        </StyledButtonEscolherArquivos>
    );
}
