import { StyledTotalCadastros } from "./styled";

function TotalCadastros(props: {total: number}) {
    return (
        <StyledTotalCadastros>{props.total}</StyledTotalCadastros>
    )
}

export default TotalCadastros