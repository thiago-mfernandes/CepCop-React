import { StyledTituloCardTotalAnalisantes } from "./styled";

function TotalCadastros(props: { totalCadastros: string }) {
    return (
        <StyledTituloCardTotalAnalisantes>{props.totalCadastros}</StyledTituloCardTotalAnalisantes>
    )
}

export default TotalCadastros;