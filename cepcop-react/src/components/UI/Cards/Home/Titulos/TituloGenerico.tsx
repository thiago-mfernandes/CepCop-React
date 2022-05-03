import { StyledTituloGenerico } from "./styled";

function TituloGenerico(props: { conteudo: string }) {
    return (
        <StyledTituloGenerico>{props.conteudo}</StyledTituloGenerico>
    )
}

export default TituloGenerico