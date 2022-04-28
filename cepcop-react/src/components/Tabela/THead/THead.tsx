import { StyledThead } from "../styles";
import IChildProp from "../../Interfaces/IChildProp";

function THead(props: IChildProp) {
    return <StyledThead>{props.children}</StyledThead>;
}

export default THead;
