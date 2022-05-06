import IEntradaDados from "src/components/Interfaces/IEntradaDados";
import ILabel from "src/components/Interfaces/ILabel";
import InputForm from "../../Input/InputForm";
import LabelCadastroObrigatorio from "../../Label/LabelCadastroObrigatorio";
import LabelCadastroOpcional from "../../Label/LabelCadastroOpcional";
import { StyledContainerConteudo } from "./styled";

function EntradaDados(props: IEntradaDados, param: ILabel) {
    return (
        <StyledContainerConteudo>
            {props.labelObrigatorio ? (
                <LabelCadastroObrigatorio
                    conteudoLabel={`${props.conteudoLabel}`}
                    htmlFor={`${props.htmlFor}`}
                />
            ) : (
                <LabelCadastroOpcional
                    conteudoLabel={`${props.conteudoLabel}`}
                    htmlFor={`${props.htmlFor}`}
                />
            )}
            <InputForm
                typeInput={props.typeInput}
                placeholderInput={props.placeholderInput}
                nameInput={props.nameInput}
                ariaDescribedbyInput={props.ariaDescribedbyInput}
            />
        </StyledContainerConteudo>
    );
}

export default EntradaDados;
