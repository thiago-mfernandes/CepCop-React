import styled from "styled-components";
import { verdePadrao } from "../../variaveis";

export const StyledCardAtendidos = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${verdePadrao};
    border-radius: 24px;
    box-shadow: 0px 4px 50px 0px rgba(109, 225, 149, 0.6);
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    width: 100%;

    //-------------------------------------------------------->
    @media screen and (max-width: 768px) {
        grid-column: 3 / 5;
        grid-row: 3 / 4;
    }
`;
