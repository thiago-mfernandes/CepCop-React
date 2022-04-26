import { StyledTable } from "./styles";
import IChildProp from "../Interfaces/IChildProp";

const Table: React.FC<IChildProp> = ({
    children
}:IChildProp):JSX.Element => (
    <StyledTable>
        {children}
    </StyledTable>
)

export default Table;