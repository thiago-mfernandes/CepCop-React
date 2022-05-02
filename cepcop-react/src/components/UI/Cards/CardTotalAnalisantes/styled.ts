import styled from "styled-components"
import { branco } from "../../variaveis";

export const StyledTotalAnalisantes = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${branco};
    border-radius: 24px;
    box-shadow: 0px 4px 50px 0px rgba(0,0,0,.15);
    grid-column: 4 / 5;
    grid-row: 1 / 3;
    width: 100%;

    //------------------------------------------------------------>
    @media screen and (max-width:768px) {
        grid-column: 1 / 4;
        grid-row: 5 / 6;
    }
`;

export const 

//@media screen and (max-width:768px)