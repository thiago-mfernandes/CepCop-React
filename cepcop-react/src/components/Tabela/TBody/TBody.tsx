import { StyledTBody } from "../styles";
import IChildProp from "src/components/Interfaces/IChildProp";

function TabelaBody(props: IChildProp) {
    return <StyledTBody>{props.children}</StyledTBody>;
}

export default TabelaBody;
