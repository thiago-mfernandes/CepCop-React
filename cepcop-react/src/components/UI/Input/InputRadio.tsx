import { StyledInputRadio } from "./styles";
import IInputProps from "src/components/Interfaces/IInputProps";

function InputRadio(props: IInputProps) {
    return (
        <StyledInputRadio
            type={props.typeInput}
            placeholder={props.placeholderInput}
            name={props.nameInput}
            aria-describedby={props.ariaDescribedbyInput}
        />
    );
}

export default InputRadio;
