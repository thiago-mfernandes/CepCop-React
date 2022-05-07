import styled from "styled-components";
import { azulEscuroFosco, cinzaEscuro } from "../variaveis";
import IInputProps from "src/components/Interfaces/IInputProps";

export const StyledInputPadrao = styled.input`
    height: 6.5vh;
    width: 30%;
    color: ${cinzaEscuro};
    font-size: 0.75rem;
    font-style: italic;
    font-weight: lighter;
    border: none;
    border-radius: 24px;
    padding-left: 5%;
    margin: 1.5% 0 1.5% 5%;
    &:focus {
        border: 1px solid ${azulEscuroFosco};
        outline: none;
    }
    @media screen and (max-width: 768px) {
        height: 5vh;
        width: 50%;
    }
`;

export default function InputPadrao(props: IInputProps) {
    return (
        <StyledInputPadrao
            type={props.typeInput}
            placeholder={props.placeholderInput}
            name={props.nameInput}
            aria-describedby={props.ariaDescribedbyInput}
        />
    );
}
