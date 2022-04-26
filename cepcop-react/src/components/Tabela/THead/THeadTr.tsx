import { StyledTheadTr } from "../styles";
import IChildProp from '../../Interfaces/IChildProp'

const THeadTr: React.FC<IChildProp> = ({
    children
}:IChildProp):JSX.Element => (
    <StyledTheadTr>
        {children}
    </StyledTheadTr>
);

export default THeadTr;