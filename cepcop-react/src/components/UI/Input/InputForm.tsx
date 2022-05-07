import styled from "styled-components";
import { StyledInputPadrao } from "./InputPadrao";
import IInputProps from "src/components/Interfaces/IInputProps";

const StyledInputForm = styled(StyledInputPadrao)`
    margin: 0;
    margin-bottom: 5%;
    width: 100%;
`;
export default function InputForm(props: IInputProps) {
    return (
        <StyledInputForm
            type={props.typeInput}
            placeholder={props.placeholderInput}
            name={props.nameInput}
            aria-describedby={props.ariaDescribedbyInput}
        ></StyledInputForm>
    );
}
