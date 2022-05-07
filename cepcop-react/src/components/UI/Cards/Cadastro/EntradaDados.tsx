import styled from "styled-components";
import IEntradaDados from "src/components/Interfaces/IEntradaDados";
import ILabel from "src/components/Interfaces/ILabel";
import InputForm from "../../Input/InputForm";
import LabelCadastroObrigatorio from "../../Label/LabelCadastroObrigatorio";
import LabelCadastroOpcional from "../../Label/LabelCadastroOpcional";

export const StyledContainerConteudo = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export default function EntradaDados(props: IEntradaDados, param: ILabel) {
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
