import styled from "styled-components";
import { cinzaEscuro } from "../UI/variaveis";

const StyledTituloModalDefault = styled.h2`
    color: ${cinzaEscuro};
    font-size: 1.75rem;
    font-family: "Fjalla-One", sans-serif;
    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export default function TituloModal(props: { conteudo: string }) {
    return (
        <StyledTituloModalDefault>{props.conteudo}</StyledTituloModalDefault>
    );
}
