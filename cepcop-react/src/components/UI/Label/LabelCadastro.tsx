import { StyledLabelCadastro } from "./styled";
import ILabel from "../../Interfaces/ILabel";
import IEntradaDados from "../../Interfaces/IEntradaDados";

function LabelCadastro(props: ILabel, param: IEntradaDados) {
    return (
        <StyledLabelCadastro htmlFor={props.htmlFor}>
            {param.obrigatorio ? <span> *</span> : <span> (opcional)</span>}
        </StyledLabelCadastro>
    );
}

export default LabelCadastro;
