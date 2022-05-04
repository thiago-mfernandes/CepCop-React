import { StyledTituloModalDefault } from "./styled";

function TituloModal(props: { conteudo: string }) {
    return (
        <StyledTituloModalDefault>{props.conteudo}</StyledTituloModalDefault>
    );
}

export default TituloModal;
