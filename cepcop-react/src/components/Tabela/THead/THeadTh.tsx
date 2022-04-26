import IChildProp from "../../Interfaces/IChildProp";
import { StyledTheadTh } from "../styles";

const THeadTh: React.FC<IChildProp> = ({
    children
}:IChildProp):JSX.Element => (
    <StyledTheadTh>
        {children}
    </StyledTheadTh>
)

export default THeadTh;