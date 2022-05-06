import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledEntradaDadosTelefone } from "./styled";

function EntradaDadosTelefone(props: IChildProp) {
    return (
        <StyledEntradaDadosTelefone data-display-telefone>
            {props.children}
        </StyledEntradaDadosTelefone>
    )
}

export default EntradaDadosTelefone