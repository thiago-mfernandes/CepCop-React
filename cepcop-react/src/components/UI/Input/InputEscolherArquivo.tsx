import IInputProps from "src/components/Interfaces/IInputProps";
import { StyledInputEscolherArquivo } from "./styles";

function InputEscolherArquivo(props: IInputProps) {
    return (
        <StyledInputEscolherArquivo
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            aria-describedby={props.ariaDescribedby}
        ></StyledInputEscolherArquivo>
    );
}

export default InputEscolherArquivo;
