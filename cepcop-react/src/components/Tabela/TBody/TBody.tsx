import { StyledTBody } from "../styles";
import IChildProp from "src/components/Interfaces/IChildProp";

const TabelaBody: React.FC<IChildProp> = ({
    children
}:IChildProp): JSX.Element => (
    <StyledTBody>{children}</StyledTBody>
);

export default TabelaBody;
