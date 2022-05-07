import { brancoBg, cinzaEscuro } from "src/components/UI/variaveis";
import styled from "styled-components";

const StyledTitulo = styled.p`
    color: ${brancoBg};
    font-size: 1.25rem;
    background-color: ${cinzaEscuro};
    border-radius: 24px 24px 0 0;
    height: 6vh;
    padding: 2.5%;
    margin-bottom: 1.5%;
    text-align: center;
    @media screen and (max-width: 768px) {
        height: 7.5vh;
    }
`;

export default function Titulo(props: { titulo: string }) {
    return <StyledTitulo>{props.titulo}</StyledTitulo>;
}
