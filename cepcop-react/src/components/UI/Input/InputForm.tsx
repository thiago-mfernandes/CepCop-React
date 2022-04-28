import IInputProps from "src/components/Interfaces/IInputProps";
import { StyledInputForm } from "./styles";

function InputForm(props: IInputProps) {
    return (
        <StyledInputForm
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            aria-describedby={props.ariaDescribedby}
        ></StyledInputForm>
    );
}

export default InputForm;
