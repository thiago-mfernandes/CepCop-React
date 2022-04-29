import { StyledFooterInfo } from "./styles";

function FooterInfo(props: {texto: string}) {
    return <StyledFooterInfo>{props.texto}</StyledFooterInfo>;
}

export default FooterInfo;
