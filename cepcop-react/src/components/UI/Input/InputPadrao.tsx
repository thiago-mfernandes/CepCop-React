import { Container } from "./styles";

export interface InputProps {
    type: string;
    placeholder: string;
    name: string;
    ariaDescribedby: string;
}

const InputPadrao: React.FC<InputProps> = ({
    type,
    placeholder,
    name,
    ariaDescribedby,
}) => (
    <Container
        type={type}
        placeholder={placeholder}
        name={name}
        aria-describedby={ariaDescribedby}
    ></Container>
);

export default InputPadrao;
