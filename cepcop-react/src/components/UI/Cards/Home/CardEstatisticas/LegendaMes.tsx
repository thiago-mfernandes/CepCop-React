import { cinzaEscuro } from "src/components/UI/variaveis";
import styled from "styled-components";

const StyledLegendaMes = styled.p`
    color: ${cinzaEscuro};
    font-size: 1.1rem;
    text-align: center;
`;

export default function LegendaMes(props: { legenda: string }) {
    return <StyledLegendaMes>{props.legenda}</StyledLegendaMes>;
}
