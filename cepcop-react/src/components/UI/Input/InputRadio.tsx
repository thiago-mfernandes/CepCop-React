import { StyledInputRadio } from "./styles";
import IInputProps from "src/components/Interfaces/IInputProps";

function InputRadio(props: IInputProps) {
    return (
        <StyledInputRadio
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            aria-describedby={props.ariaDescribedby}
        />
    );
}

export default InputRadio;
