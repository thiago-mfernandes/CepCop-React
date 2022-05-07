import styled from "styled-components";
import { StyledInputPadrao } from "./InputPadrao";
import IInputProps from "src/components/Interfaces/IInputProps";

const StyledInputAlterar = styled(StyledInputPadrao)`
    margin: 0 auto;
    margin-bottom: 1%;
    width: 90%;
    &:last-of-type {
        margin-bottom: 5%;
    }
    @media screen and (max-width: 768px) {
        margin-bottom: 3%;
    }
`;

export default function InputAlterar(props: IInputProps) {
    return (
        <StyledInputAlterar
            type={props.typeInput}
            placeholder={props.placeholderInput}
            name={props.nameInput}
            aria-describedby={props.ariaDescribedbyInput}
        ></StyledInputAlterar>
    );
}
