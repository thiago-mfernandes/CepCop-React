import { StyledTabelaContainer } from "./styles";
import IChildProp from "../Interfaces/IChildProp";

const TabelaContainer: React.FC<IChildProp> = ({
    children
}:IChildProp):JSX.Element => (
    <StyledTabelaContainer>
        {children}
    </StyledTabelaContainer>
)

export default TabelaContainer;