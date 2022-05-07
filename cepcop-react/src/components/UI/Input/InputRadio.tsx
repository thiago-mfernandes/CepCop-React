import styled from "styled-components";
import { StyledInputPadrao } from "./InputPadrao";
import IInputProps from "src/components/Interfaces/IInputProps";

const StyledInputRadio = styled(StyledInputPadrao)`
    margin-bottom: 2.5%;
`;

export default function InputRadio(props: IInputProps) {
    return (
        <StyledInputRadio
            type={props.typeInput}
            placeholder={props.placeholderInput}
            name={props.nameInput}
            aria-describedby={props.ariaDescribedbyInput}
        />
    );
}
