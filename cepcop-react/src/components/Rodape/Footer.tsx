import { StyledFooter } from "./styles";
import IChildProp from "../Interfaces/IChildProp";

function Footer(props: IChildProp) {
    return <StyledFooter>{props.children}</StyledFooter>;
}

export default Footer;
