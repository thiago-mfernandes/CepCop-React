import { StyledDiaSemana } from "./styled";

function DiaSemana(props: {dia: string}) {
    return (
        <StyledDiaSemana>{props.dia}</StyledDiaSemana>
    )
}

export default DiaSemana;