import IEntradaDados from "src/components/Interfaces/IEntradaDados";
import styled from "styled-components";
import { cinzaEscuro, vermelhoPadrao, verdePadrao } from "../variaveis";

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

export const StyledLabelCadastro = styled(StyledLabel)<IEntradaDados>`
    opacity: 0.7;

    & span {
        color: ${(props) =>
            props.obrigatorio ? `${vermelhoPadrao}` : `${verdePadrao}`};
    }
    @media screen and (max-width: 768px) {
        padding-left: 2%;
    }
`;
