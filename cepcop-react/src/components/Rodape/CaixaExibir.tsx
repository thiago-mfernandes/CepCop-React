import { StyledFooterCaixaExibir } from "./styles";
import IChildProp from "../Interfaces/IChildProp";

function CaixaExibir(props: IChildProp) {
    return <StyledFooterCaixaExibir>{props.children}</StyledFooterCaixaExibir>;
}
export default CaixaExibir;
