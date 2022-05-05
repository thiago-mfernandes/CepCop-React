import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledFilaEspera } from "./styled";

function FilaEspera(props: IChildProp) {
    return (
        <StyledFilaEspera>{props.children}</StyledFilaEspera>
    )
}

export default FilaEspera