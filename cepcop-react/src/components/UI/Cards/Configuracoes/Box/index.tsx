import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledBox } from "./styled";

function Box(props: IChildProp) {
    return <StyledBox>{props.children}</StyledBox>;
}

export default Box;
