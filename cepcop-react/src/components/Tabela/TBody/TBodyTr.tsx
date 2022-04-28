import { StyledTBodyTr } from "../styles";
import IChildProp from "src/components/Interfaces/IChildProp";

function TabelaBodyTr(props: IChildProp) {
    return <StyledTBodyTr>{props.children}</StyledTBodyTr>;
}

export default TabelaBodyTr;
