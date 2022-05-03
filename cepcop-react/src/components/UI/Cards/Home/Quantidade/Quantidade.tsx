import { StyledQuantidade } from "./styled";

function Quantidade(props: { quantidade: number }) {
    return <StyledQuantidade>{props.quantidade}</StyledQuantidade>;
}

export default Quantidade;
