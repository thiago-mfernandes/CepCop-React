import { cinzaEscuro, vermelhoPadrao } from "src/components/UI/variaveis";
import styled from "styled-components";

const StyledInstrucoes = styled.p`
    color: ${cinzaEscuro};
    font-size: 1rem;
    margin: 1% 0;
    text-align: left;
    width: 100%;
    & span {
        color: ${vermelhoPadrao};
    }
`;

export default function Instrucoes(props: {
    textoSpan: string;
    descricao1: string;
    descricao2: string;
}) {
    return (
        <StyledInstrucoes>
            {props.descricao1}
            <span>{props.textoSpan}</span>
            {props.descricao2}
        </StyledInstrucoes>
    );
}
