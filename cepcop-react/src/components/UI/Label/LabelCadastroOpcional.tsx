import ILabel from "src/components/Interfaces/ILabel";
import { verdePadrao } from "../variaveis";
import { StyledLabelCadastro } from "./styled";

function LabelCadastroOpcional(props: ILabel) {
    return (
        <StyledLabelCadastro htmlFor={props.htmlFor}>
            {props.conteudoLabel}
            <span style={{ color: `${verdePadrao}` }}> (Opcional)</span>
        </StyledLabelCadastro>
    );
}

export default LabelCadastroOpcional;
