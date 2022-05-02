import { StyledLegendaMes } from "./styled";

function LegendaMes(props: {legenda: string}) {
    return (
        <StyledLegendaMes>{props.legenda}</StyledLegendaMes>
    )
}

export default LegendaMes