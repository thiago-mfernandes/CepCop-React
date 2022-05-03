import styled from "styled-components";

export const StyledContainer = styled.div`
    background-color: rgb(231, 231, 233, .7);
    border-radius: 48px 48px 0 0;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,.15);
    margin-bottom: 2.5%;
    padding: 5% 0 .75%;
    width: 100%;

    //--------------------------------------------------------->
    @media screen and (max-width:768px) {
        border-radius: 0 0 16px 16px;
        box-shadow: 0 4px 10px 0 rgba(0,0,0,.25);
        margin-bottom: 10%
    }
`;