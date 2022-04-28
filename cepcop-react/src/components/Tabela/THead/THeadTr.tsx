import { StyledTheadTr } from "../styles";
import IChildProp from "../../Interfaces/IChildProp";

function THeadTr(props: IChildProp) {
    return <StyledTheadTr>{props.children}</StyledTheadTr>;
}
export default THeadTr;
