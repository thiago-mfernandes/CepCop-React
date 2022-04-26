import { StyledInputAlterar } from "./styles";
import { InputProps } from "./InputPadrao";

const InputAlterar: React.FC<InputProps> = ({
    type,
    placeholder,
    name,
    ariaDescribedby,
}:InputProps):JSX.Element => (
    <StyledInputAlterar
        type={type}
        placeholder={placeholder}
        name={name}
        aria-describedby={ariaDescribedby}
    ></StyledInputAlterar>
);

export default InputAlterar;