import IChildProp from "src/components/Interfaces/IChildProp";
import styled from "styled-components";
import { amareloPadrao } from "../../../variaveis";

export const StyledFilaEspera = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${amareloPadrao};
    border-radius: 24px;
    box-shadow: 0px 4px 50px 0px rgba(251, 255, 64, 0.6);
    grid-column: 2 / 4;
    grid-row: 2 / 4;
    width: 100%;
    @media screen and (max-width: 768px) {
        grid-column: 1 / 3;
        grid-row: 3 / 5;
    }
`;

export default function FilaEspera(props: IChildProp) {
    return <StyledFilaEspera>{props.children}</StyledFilaEspera>;
}
