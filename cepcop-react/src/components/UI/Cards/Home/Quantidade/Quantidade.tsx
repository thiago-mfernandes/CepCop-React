import styled from "styled-components";
import { cinzaEscuro } from "../../../variaveis";

const StyledQuantidade = styled.p`
    color: ${cinzaEscuro};
    font-size: 2rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
`;

export default function Quantidade(props: { quantidade: number }) {
    return <StyledQuantidade>{props.quantidade}</StyledQuantidade>;
}
