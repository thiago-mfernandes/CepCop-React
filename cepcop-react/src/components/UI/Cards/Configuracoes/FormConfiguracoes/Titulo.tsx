import { cinzaEscuro } from "src/components/UI/variaveis";
import styled from "styled-components";

const StyledTitulo = styled.h3`
    color: ${cinzaEscuro};
    font-size: 1.25rem;
`;

export default function Titulo(props: { descricao: string }) {
    return <StyledTitulo>{props.descricao}</StyledTitulo>;
}
