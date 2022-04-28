import { cinzaEscuro } from "src/components/UI/variaveis";
import styled from "styled-components";

export const UserType = styled.h2`
    color: ${cinzaEscuro};
    font-size: 1.75rem;
    font-family: "Fjalla One" sans-serif;
    padding-left: 5%;
    border-bottom: 5%;

    //---------------------------------------------->
    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`;
