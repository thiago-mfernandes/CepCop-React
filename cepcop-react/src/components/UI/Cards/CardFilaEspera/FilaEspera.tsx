import { StyledFilaEspera } from "./styled";

function FilaEspera(props: { children: React.ReactNode }) {
    return (
        <StyledFilaEspera>{props.children}</StyledFilaEspera>
    )
}

export default FilaEspera