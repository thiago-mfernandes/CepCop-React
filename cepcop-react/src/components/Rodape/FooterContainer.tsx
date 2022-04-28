import { StyledFooterContainer } from "./styles";
import IChildProp from "../Interfaces/IChildProp";

function FooterContainer(props: IChildProp) {
    return <StyledFooterContainer>{props.children}</StyledFooterContainer>;
}

export default FooterContainer;
