import { StyledThead } from "../styles";
import IChildProp from "../../Interfaces/IChildProp";

const THead: React.FC<IChildProp> = ({
    children
}:IChildProp): JSX.Element => (
    <StyledThead>{children}</StyledThead>
);

export default THead;
