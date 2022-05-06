import Ilabel from "src/components/Interfaces/ILabel";
import { vermelhoPadrao } from "../variaveis";
import { StyledLabelCadastro } from "./styled";

function LabelCadastroObrigatorio(props: Ilabel) {
    return (
        <StyledLabelCadastro htmlFor={props.htmlFor}>
            {props.conteudoLabel}
            <span style={{ color: `${vermelhoPadrao}` }}> *</span>
        </StyledLabelCadastro>
    );
}

export default LabelCadastroObrigatorio;
