import styled from "styled-components";
import { cinzaEscuro } from "../variaveis";

export const StyledLabel = styled.label`
    color: ${cinzaEscuro};
    font-size: 1.1rem;
    font-family: "Fjalla-One", sans-serif;
    margin: 5% 0;
`;

export const StyledLabelLogin = styled(StyledLabel)`
    margin: 2% 0;

    //-------------------------------------------------->
    @media screen and (max-width: 768px) {
        margin: 5% 0;
    }
`;