import { StyledTabelaHeaderTr } from "./styles";
import IChildProp from '../Interfaces/IChildProp'

const TabelaHeaderTr: React.FC<IChildProp> = ({
    children
}:IChildProp):JSX.Element => (
    <StyledTabelaHeaderTr>
        {children}
    </StyledTabelaHeaderTr>
);

export default TabelaHeaderTr;