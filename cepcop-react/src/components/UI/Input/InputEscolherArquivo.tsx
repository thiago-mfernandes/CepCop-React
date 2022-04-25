import { StyledInputEscolherArquivo } from "./styles";
import { InputProps } from "./InputPadrao";

const InputEscolherArquivo: React.FC<InputProps> = ({
    type,
    placeholder,
    name,
    ariaDescribedby,
}) => (
    <StyledInputEscolherArquivo
        type={type}
        placeholder={placeholder}
        name={name}
        aria-describedby={ariaDescribedby}
    ></StyledInputEscolherArquivo>
);

export default InputEscolherArquivo;