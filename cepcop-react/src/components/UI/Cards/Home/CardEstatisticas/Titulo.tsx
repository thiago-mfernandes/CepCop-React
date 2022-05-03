import { StyledTitulo } from "./styled";

function Titulo(props: {titulo: string}) {
    return (
        <StyledTitulo>{props.titulo}</StyledTitulo>
    )
}

export default Titulo