import { StyledTitulo } from "./styled";

function Titulo(props: { descricao: string }) {
    return <StyledTitulo>{props.descricao}</StyledTitulo>;
}

export default Titulo;
