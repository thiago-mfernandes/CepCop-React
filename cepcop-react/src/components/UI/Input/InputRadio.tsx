import { StyledInputRadio } from "./styles";
import { InputProps } from "./InputPadrao";

const InputRadio: React.FC<InputProps> = ({
    type,
    placeholder,
    name,
    ariaDescribedby,
}:InputProps) => (
    <StyledInputRadio
        type={type}
        placeholder={placeholder}
        name={name}
        aria-describedby={ariaDescribedby}
    ></StyledInputRadio>
);

export default InputRadio;