import styled from "styled-components";
import { azulEscuroFosco, cinzaEscuro } from "../variaveis";

const inputPadrao = styled.input`
    height: 6.5vh;
    width: 30%;
    color: ${cinzaEscuro};
    font-size: 0.75rem;
    font-style: italic;
    font-weight: lighter;
    border: none;
    border-radius: 24px;
    padding-left: 5%;
    margin: 1.5% 0 0 5%;

    &:focus {
        border: 1px solid ${azulEscuroFosco};
        outline: none;
    }
    //------------------------------------------------>
    @include mobile {
        height: 5vh;
        width: 50%;
    }
`;


interface InputTypeProps {
    type: string;
}

function Input (props: InputTypeProps):any {
    const typeOfProp:string = props.type;
    
    if(typeOfProp === 'inputPadrao') {
        return inputPadrao;
    }

}

export default Input;
