import { cinzaEscuro } from "src/components/UI/variaveis";
import styled from "styled-components";

const StyledTipoUsuario = styled.h2`
    color: ${cinzaEscuro};
    font-size: 1.75rem;
    font-family: "Fjalla-One", sans-serif;
    padding-left: 5%;
    padding-bottom: 2.5%;
    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export default function TipoUsuario(props: { nome: string }) {
    return <StyledTipoUsuario>{props.nome}</StyledTipoUsuario>;
}
