import { StyledTituloSecao } from "./styled";

function TituloSecao(props: { conteudo: string }) {
    return <StyledTituloSecao>{props.conteudo}</StyledTituloSecao>;
}

export default TituloSecao
