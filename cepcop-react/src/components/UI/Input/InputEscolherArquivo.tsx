import IInputProps from "src/components/Interfaces/IInputProps";
import { StyledInputEscolherArquivo } from "./styles";

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
