import { StyledInputForm } from "./styles";

import { InputProps } from "./InputPadrao";

const InputForm: React.FC<InputProps> = ({
    type,
    placeholder,
    name,
    ariaDescribedby,
}) => (
    <StyledInputForm
        type={type}
        placeholder={placeholder}
        name={name}
        aria-describedby={ariaDescribedby}
    ></StyledInputForm>
);

export default InputForm;
