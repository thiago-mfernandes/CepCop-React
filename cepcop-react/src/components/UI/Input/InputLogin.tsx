import { StyledInputLogin } from "./styles";
import { InputProps } from "./InputPadrao";

const InputLogin: React.FC<InputProps> = ({
    type,
    placeholder,
    name,
    ariaDescribedby,
}) => (
    <StyledInputLogin
        type={type}
        placeholder={placeholder}
        name={name}
        aria-describedby={ariaDescribedby}
    ></StyledInputLogin>
);

export default InputLogin;