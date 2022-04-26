import { StyledFooter } from "./styles";
import IChildProp from '../Interfaces/IChildProp';


const Footer: React.FC<IChildProp> = ({
    children,
}: IChildProp): JSX.Element => (
    <StyledFooter>{children}</StyledFooter>
);

export default Footer;
