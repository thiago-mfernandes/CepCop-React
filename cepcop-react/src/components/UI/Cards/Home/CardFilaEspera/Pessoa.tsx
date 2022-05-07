import { cinzaEscuro } from "src/components/UI/variaveis";
import styled from "styled-components";

const StyledPessoa = styled.p`
    color: ${cinzaEscuro};
    font-size: 1rem;
`;

export default function Pessoa(props: { nome: string }) {
    return <StyledPessoa>{props.nome}</StyledPessoa>;
}
