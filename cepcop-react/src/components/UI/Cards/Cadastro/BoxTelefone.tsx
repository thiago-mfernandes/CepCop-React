import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledContainerConteudoTelefone } from "./styled";

function BoxTelefone(props: IChildProp) {
    return (
        <StyledContainerConteudoTelefone>
            {props.children}
        </StyledContainerConteudoTelefone>
    );
}

export default BoxTelefone;
