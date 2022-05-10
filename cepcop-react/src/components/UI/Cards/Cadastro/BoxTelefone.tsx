import IChildProp from "src/components/Interfaces/IChildProp";
import styled from "styled-components";
import { StyledContainerConteudo } from "./EntradaDados";

const StyledContainerConteudoTelefone = styled(StyledContainerConteudo)`
    width: 100%;
`;

export default function BoxTelefone(props: IChildProp) {
    return (
        <StyledContainerConteudoTelefone>
            {props.children}
        </StyledContainerConteudoTelefone>
    );
}
