import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledContainerTelefone } from "./styled";

function ContainerTelefone(props: IChildProp) {
    return <StyledContainerTelefone>{props.children}</StyledContainerTelefone>;
}

export default ContainerTelefone;
