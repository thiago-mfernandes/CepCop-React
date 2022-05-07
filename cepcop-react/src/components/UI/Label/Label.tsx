import styled from "styled-components";
import { cinzaEscuro } from "../variaveis";

export const StyledLabel = styled.label`
    color: ${cinzaEscuro};
    font-size: 1.1rem;
    font-family: "Fjalla-One", sans-serif;
    margin: 5% 0;
`;

export default function Label(props: {
    htmlFor: string;
    children: React.ReactNode;
}) {
    return <StyledLabel htmlFor={props.htmlFor}>{props.children}</StyledLabel>;
}
