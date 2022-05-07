import styled from "styled-components";
import { StyledTituloGenerico } from "../Titulos/TituloGenerico";

const StyledTitulo = styled(StyledTituloGenerico)`
    font-size: 1rem;
    padding-left: 5%;
    padding-right: 5%;
`;

export default function Titulo(props: { titulo: string }) {
    return <StyledTitulo>{props.titulo}</StyledTitulo>;
}
