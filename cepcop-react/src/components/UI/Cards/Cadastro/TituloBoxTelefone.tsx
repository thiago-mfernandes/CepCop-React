import { cinzaEscuro, vermelhoPadrao } from "../../variaveis";
import styled from "styled-components";

const StyledTituloBoxTelefone = styled.h2`
    @extend %fjala;
    @include color-fontSize($cinza-escuro, 1.1rem);
    font-family: "Fjalla-One", sans-serif;
    color: ${cinzaEscuro};
    font-size: 1.1rem;
    margin: 5% 0;
    opacity: 0.7;
    text-align: center;
`;

export default function TituloBoxTelefone(props: { conteudoTitulo: string }) {
    return (
        <StyledTituloBoxTelefone>
            {props.conteudoTitulo}
            <span style={{ color: `${vermelhoPadrao}` }}> *</span>
        </StyledTituloBoxTelefone>
    );
}
