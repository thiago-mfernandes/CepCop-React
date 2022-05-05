import IInputProps from "src/components/Interfaces/IInputProps";
import { StyledInputForm } from "./styles";

function InputForm(props: IInputProps) {
    return (
        <StyledInputForm
            type={props.typeInput}
            placeholder={props.placeholderInput}
            name={props.nameInput}
            aria-describedby={props.ariaDescribedbyInput}
        ></StyledInputForm>
    );
}

export default InputForm;
