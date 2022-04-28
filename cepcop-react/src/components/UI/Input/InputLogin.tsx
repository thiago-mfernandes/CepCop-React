import IInputProps from "src/components/Interfaces/IInputProps";
import { StyledInputLogin } from "./styles";

function InputLogin(props: IInputProps) {
    return (
        <StyledInputLogin
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            aria-describedby={props.ariaDescribedby}
        ></StyledInputLogin>
    );
}

export default InputLogin;
