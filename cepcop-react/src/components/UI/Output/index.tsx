import { branco, cinzaEscuro } from "../variaveis";
import styled from "styled-components";

const StyledContainer = styled.div`
    color: ${cinzaEscuro};
    font-size: 0.75rem;
    font-style: italic;
    font-weight: lighter;
    height: 4vh;
    width: 10%;
    background-color: ${branco};
    border-radius: 16px;
    margin: 0 5%;
    padding: 0.75%;
    text-align: center;

    //----------------------------------------------->
    @media screen and (max-width: 768px) {
        height: 4vh;
        width: 10%;
    }
`;

export default function Output(props: { valor: number }) {
    return <StyledContainer>{props.valor}</StyledContainer>;
}
