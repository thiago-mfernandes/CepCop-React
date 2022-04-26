import { StyledTabelaHeader } from "./styles";
import IChildProp from "../Interfaces/IChildProp";

const TabelaHeader: React.FC<IChildProp> = ({
    children
}:IChildProp): JSX.Element => (
    <StyledTabelaHeader>{children}</StyledTabelaHeader>
);

export default TabelaHeader;
