import { StyledTable } from "./styles";
import IChildProp from "../Interfaces/IChildProp";

function Table(props: IChildProp) {
    return <StyledTable>{props.children}</StyledTable>;
}

export default Table;
