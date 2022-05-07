import { cinzaEscuro } from "src/components/UI/variaveis";
import styled from "styled-components";

const StyledTitulo = styled.p`
    color: ${cinzaEscuro};
    font-size: 1rem;
    margin: 5% 0;
    text-align: center;
    @media screen and (max-width: 768px) {
        word-wrap: wrap;
        width: 75%;
    }
`;

export default function Titulo(props: { titulo: string }) {
    return <StyledTitulo>{props.titulo}</StyledTitulo>;
}
