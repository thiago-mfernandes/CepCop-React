import styled from "styled-components";
import { cinzaEscuro } from "../../variaveis";

const StyledTituloSecao = styled.h2`
    font-family: "Fjalla-One", sans-serif;
    color: ${cinzaEscuro};
    font-size: 1.5rem;
    opacity: 0.9;
`;

export default function TituloSecao(props: { conteudo: string }) {
    return <StyledTituloSecao>{props.conteudo}</StyledTituloSecao>;
}
