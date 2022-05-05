import { Container } from "./styles";
import IInputProps from "src/components/Interfaces/IInputProps";

function InputPadrao(props: IInputProps) {
    return (
        <Container
            type={props.typeInput}
            placeholder={props.placeholderInput}
            name={props.nameInput}
            aria-describedby={props.ariaDescribedbyInput}
        />
    );
}

export default InputPadrao;
