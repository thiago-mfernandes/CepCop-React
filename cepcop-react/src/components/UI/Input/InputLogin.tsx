import IInputProps from "src/components/Interfaces/IInputProps";
import { StyledInputLogin } from "./styles";

function InputLogin(props: IInputProps) {
    return (
        <StyledInputLogin
            type={props.typeInput}
            placeholder={props.placeholderInput}
            name={props.nameInput}
            aria-describedby={props.ariaDescribedbyInput}
        ></StyledInputLogin>
    );
}

export default InputLogin;
