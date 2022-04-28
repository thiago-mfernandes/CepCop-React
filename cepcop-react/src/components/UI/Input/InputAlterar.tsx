import IInputProps from "src/components/Interfaces/IInputProps";
import { StyledInputAlterar } from "./styles";

function InputAlterar(props: IInputProps) {
    return (
        <StyledInputAlterar
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            aria-describedby={props.ariaDescribedby}
        ></StyledInputAlterar>
    );
}
export default InputAlterar;
