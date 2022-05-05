import IInputProps from "src/components/Interfaces/IInputProps";
import { StyledInputAlterar } from "./styles";

function InputAlterar(props: IInputProps) {
    return (
        <StyledInputAlterar
            type={props.typeInput}
            placeholder={props.placeholderInput}
            name={props.nameInput}
            aria-describedby={props.ariaDescribedbyInput}
        ></StyledInputAlterar>
    );
}
export default InputAlterar;
