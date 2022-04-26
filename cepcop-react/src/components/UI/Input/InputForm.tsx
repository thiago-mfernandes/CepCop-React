import { StyledInputForm } from "./styles";

import { InputProps } from "./InputPadrao";

const InputForm: React.FC<InputProps> = ({
    type,
    placeholder,
    name,
    ariaDescribedby,
}:InputProps):JSX.Element  => (
    <StyledInputForm
        type={type}
        placeholder={placeholder}
        name={name}
        aria-describedby={ariaDescribedby}
    ></StyledInputForm>
);

export default InputForm;
