import { cinzaMedio } from "src/components/UI/variaveis";
import styled from "styled-components";

export const StyledBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.5%;
    &:first-of-type {
        border-bottom: 1px solid ${cinzaMedio};
    }
    &:last-of-type {
        flex-direction: column;
        margin: 0 5% 1.5%;
    }

    //---------------------------------------------------------->
    @media screen and (max-width: 768px) {
        justify-content: space-between;
        padding: 0 5% 0 0;
    }
`;
