import { vermelhoPadrao } from "../../variaveis";
import { StyledTituloBoxTelefone } from "./styled";

function TituloBoxTelefone() {
    return (
        <StyledTituloBoxTelefone>
            <span style={{color: `${vermelhoPadrao}`}}> *</span>
        </StyledTituloBoxTelefone>
    )
}

export default TituloBoxTelefone