import IChildProp from "../Interfaces/IChildProp";
import { StyledTabelaRow } from "./styles";

const TabelaRow: React.FC<IChildProp> = ({
    children
}:IChildProp): JSX.Element => (
    <StyledTabelaRow>{children}</StyledTabelaRow>
);

export default TabelaRow;
