import { cinzaEscuro } from "src/components/UI/variaveis";
import styled from "styled-components";

export const StyledTituloGenerico = styled.h2`
    color: ${cinzaEscuro};
    font-size: 1rem;
    background-color: rgba(231, 231, 233, 0.5);
    border-radius: 24px 24px 0 0;
    height: 6vh;
    padding: 10% 0;
    text-align: center;
    @media screen and (max-width: 768px) {
        height: 5vh;
        padding: 10% 0 0;
        font-size: 0.8rem;
        vertical-align: text-bottom;
    }
`;

export default function TituloGenerico(props: { conteudo: string }) {
    return <StyledTituloGenerico>{props.conteudo}</StyledTituloGenerico>;
}
