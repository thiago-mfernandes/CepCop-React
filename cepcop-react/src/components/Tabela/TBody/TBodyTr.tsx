import { StyledTBodyTr } from "../styles";
import IChildProp from "src/components/Interfaces/IChildProp";

const TabelaBodyTr: React.FC<IChildProp> = ({
    children
}:IChildProp): JSX.Element => (
    <StyledTBodyTr>{children}</StyledTBodyTr>
);

export default TabelaBodyTr;
