import { StyledOpcoes } from "./styled";
import IChildProp from "../../../Interfaces/IChildProp";

function Opcoes(props: IChildProp) {
    return <StyledOpcoes>{props.children}</StyledOpcoes>;
}

export default Opcoes;
