import IEntradaDados from "src/components/Interfaces/IEntradaDados";
import ILabel from "src/components/Interfaces/ILabel";
import InputForm from "../../Input/InputForm";
import LabelCadastro from "../../Label/LabelCadastro";
import { StyledContainerConteudo } from "./styled";

function EntradaDadosObrigatoria(props: IEntradaDados, param: ILabel) {
    return (
        <StyledContainerConteudo>
            <LabelCadastro
                htmlFor={param.htmlFor}
                conteudoLabel={param.conteudoLabel}
            />
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
