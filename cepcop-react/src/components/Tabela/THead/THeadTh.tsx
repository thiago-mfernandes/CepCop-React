import IChildProp from "../../Interfaces/IChildProp";
import { StyledTheadTh } from "../styles";

function THeadTh(props: IChildProp) {
    return <StyledTheadTh>{props.children}</StyledTheadTh>;
}

export default THeadTh;
