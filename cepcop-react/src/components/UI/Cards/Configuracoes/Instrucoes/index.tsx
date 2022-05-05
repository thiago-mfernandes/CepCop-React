import { StyledInstrucoes } from "./styled";

function Instrucoes(props: {
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

export default Instrucoes;
