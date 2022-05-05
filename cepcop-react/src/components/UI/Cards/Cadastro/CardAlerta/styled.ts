import styled from "styled-components";
import {
    azulAlertaBordaPagCadastro,
    azulAlertaPagCadastro,
    letraAlertaPagCadastro,
    vermelhoPadrao,
} from "../../../variaveis";

export const StyledCardAlerta = styled.div`
    color: ${letraAlertaPagCadastro};
    font-size: 1rem;
    width: 80%;
    background-color: ${azulAlertaPagCadastro};
    border: 1px solid ${azulAlertaBordaPagCadastro};
    border-radius: 8px;
    box-shadow: 0px 0px 50px 7px rgba(5, 81, 96, 0.4);
    grid-column: 1 / 3;
    line-height: 1.5rem;
    margin: 5% auto 1%;
    padding: 3.5%;

    & span {
        color: ${vermelhoPadrao};

        //---------------------------------------------------------->
        @media screen and (max-width: 768px) {
            padding-left: 2%;
        }
    }
`;
