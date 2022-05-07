import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledContainerConteudoTelefone } from "./styled";

export default function BoxTelefone(props: IChildProp) {
    return (
        <StyledContainerConteudoTelefone>
            {props.children}
        </StyledContainerConteudoTelefone>
    );
}
