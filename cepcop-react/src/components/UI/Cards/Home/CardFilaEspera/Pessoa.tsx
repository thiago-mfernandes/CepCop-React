import { StyledPessoa } from "./styled";

function Pessoa(props: { nome: string }) {
    return <StyledPessoa>{props.nome}</StyledPessoa>;
}

export default Pessoa;
