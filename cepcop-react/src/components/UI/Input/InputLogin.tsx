import styled from "styled-components";
import { StyledInputPadrao } from "./InputPadrao";
import IInputProps from "src/components/Interfaces/IInputProps";

export const StyledInputLogin = styled(StyledInputPadrao)`
    margin: 0;
    margin-bottom: 2%;
    width: 95%;
    height: 6.5vh;
`;
export default function InputLogin(props: IInputProps) {
    return (
        <StyledInputLogin
            type={props.typeInput}
            placeholder={props.placeholderInput}
            name={props.nameInput}
            aria-describedby={props.ariaDescribedbyInput}
        ></StyledInputLogin>
    );
}
