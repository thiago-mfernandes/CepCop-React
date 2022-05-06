import { StyledLabelCadastro } from "./styled";
import ILabel from "../../Interfaces/ILabel";

function LabelCadastro(props: ILabel) {
    return (
        <StyledLabelCadastro htmlFor={props.htmlFor}>
        </StyledLabelCadastro>
    );
}

export default LabelCadastro;
