import { StyledPessoaCadastrada } from "./styled";

function PessoaCadastrada(props: { pessoa: string }) {
    return (
        <StyledPessoaCadastrada>{props.pessoa}</StyledPessoaCadastrada>
    )
}

export default PessoaCadastrada