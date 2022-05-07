import styled from "styled-components";
import { StyledInputPadrao } from "./InputPadrao";
import IInputProps from "src/components/Interfaces/IInputProps";

const StyledInputEscolherArquivo = styled(StyledInputPadrao)`
    border-radius: 0 24px 24px 0;
    margin: 0;
    width: 100%;
`;

function InputEscolherArquivo(props: IInputProps) {
    return (
        <StyledInputEscolherArquivo
            type={props.typeInput}
            placeholder={props.placeholderInput}
            name={props.nameInput}
            aria-describedby={props.ariaDescribedbyInput}
        ></StyledInputEscolherArquivo>
    );
}

export default InputEscolherArquivo;
