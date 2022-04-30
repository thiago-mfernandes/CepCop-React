import { StyledTituloGenerico } from "../CardHoje/styled";

function TituloGenerico(props: { conteudo: string }) {
    return (
        <StyledTituloGenerico>{props.conteudo}</StyledTituloGenerico>
    )
}

export default TituloGenerico