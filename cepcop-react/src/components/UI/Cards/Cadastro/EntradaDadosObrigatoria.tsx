import IContainerConteudo from "src/components/Interfaces/IContainerConteudo";
import InputForm from "../../Input/InputForm";
import LabelCadastro from "../../Label/LabelCadastro";
import { StyledContainerConteudo } from "./styled";

function EntradaDadosObrigatoria(props: IContainerConteudo) {
    return (
        <StyledContainerConteudo>
            <LabelCadastro>
                {props.conteudoLabel}
                <span> *</span>
            </LabelCadastro>
            <InputForm
                typeInput={props.typeInput}
                placeholderInput={props.placeholderInput}
                nameInput={props.nameInput}
                ariaDescribedbyInput={props.ariaDescribedbyInput}
            />

        </StyledContainerConteudo>
    );
}

export default EntradaDadosObrigatoria;
