import { StyledTotalCadastros } from "./styled";

function TotalCadastros(props: { totalCadastros: string }) {
    return (
        <StyledTotalCadastros>{props.totalCadastros}</StyledTotalCadastros>
    )
}

export default TotalCadastros;