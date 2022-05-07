import styled from "styled-components";
import IChildProp from "src/components/Interfaces/IChildProp";
import {
    azulMedioBrilhante,
    cinzaMedio,
    cinzaEscuro,
} from "src/components/UI/variaveis";

const StyledTBodyTr = styled.tr`
    color: ${azulMedioBrilhante};
    font-size: 1rem;
    border-bottom: 1px solid ${cinzaMedio};
    @media screen and (max-width: 768px) {
        display: block;
        width: 100%;
        margin: 5% 0;
        border-bottom: 3px solid ${azulMedioBrilhante};
    }
    &:nth-of-type(even) {
        color: ${cinzaEscuro};
    }
`;

export default function TabelaBodyTr(props: IChildProp) {
    return <StyledTBodyTr>{props.children}</StyledTBodyTr>;
}
