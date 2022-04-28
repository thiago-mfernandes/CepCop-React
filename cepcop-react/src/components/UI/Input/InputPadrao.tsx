import { Container } from "./styles";
import IInputProps from "src/components/Interfaces/IInputProps";

function InputPadrao(props: IInputProps) {
    return (
        <Container
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            aria-describedby={props.ariaDescribedby}
        />
    );
}

export default InputPadrao;
