import styled from "styled-components";

export const StyledBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.5%;

    //---------------------------------------------------------->
    @media screen and (max-width: 768px) {
        justify-content: space-between;
        padding: 0 5% 0 0;
    }
`;
