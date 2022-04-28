import { StyledInputRadio } from "./styles";
//import { InputProps } from "./InputPadrao";

function InputRadio(props: {
    type: string;
    placeholder?: string;
    name?: string;
    ariaDescribedby?: string;
}) {
    return (
        <StyledInputRadio
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            aria-describedby={props.ariaDescribedby}
        />
    );
}

export default InputRadio;
