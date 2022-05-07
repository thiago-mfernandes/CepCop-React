import IChildProp from "src/components/Interfaces/IChildProp";
import styled from "styled-components";
import { StyledContainerConteudo } from "./EntradaDados";

const StyledEntradaDadosTelefone = styled(StyledContainerConteudo)`
    width: 100%;
`;

export default function EntradaDadosTelefone(props: IChildProp) {
    return (
        <StyledEntradaDadosTelefone data-display-telefone>
            {props.children}
        </StyledEntradaDadosTelefone>
    );
}
