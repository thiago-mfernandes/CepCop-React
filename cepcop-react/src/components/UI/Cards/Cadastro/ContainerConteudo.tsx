import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledContainerConteudo } from "./styled";

function ContainerConteudo(props: IChildProp) {
    return <StyledContainerConteudo>{props.children}</StyledContainerConteudo>;
}

export default ContainerConteudo;
