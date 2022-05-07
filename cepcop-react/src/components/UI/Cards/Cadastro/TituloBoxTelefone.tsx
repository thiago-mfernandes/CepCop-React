import { vermelhoPadrao } from "../../variaveis";
import { StyledTituloBoxTelefone } from "./styled";

function TituloBoxTelefone(props: {conteudoTitulo : string}) {
    return (
        <StyledTituloBoxTelefone>
            {props.conteudoTitulo}<span style={{color: `${vermelhoPadrao}`}}> *</span>
        </StyledTituloBoxTelefone>
    )
}

export default TituloBoxTelefone