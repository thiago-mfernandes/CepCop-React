import IChildProp from "../Interfaces/IChildProp";
import { StyledTabelaRowTh } from "./styles";

const TabelaRowTh: React.FC<IChildProp> = ({
    children
}:IChildProp):JSX.Element => (
    <StyledTabelaRowTh>
        {children}
    </StyledTabelaRowTh>
)

export default TabelaRowTh;