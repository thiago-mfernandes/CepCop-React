import { StyledFooterContainer } from "./styles";
import IChildProp from '../Interfaces/IChildProp';

const FooterContainer: React.FC<IChildProp> = ({
    children
}:IChildProp):JSX.Element => (
    <StyledFooterContainer>{children}</StyledFooterContainer>
);

export default FooterContainer;