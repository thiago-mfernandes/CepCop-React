import styled from "styled-components";
import { cinzaClaro } from "../../variaveis";

export const StyledContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(
        155deg,
        rgba(85, 131, 238, 1) 0%,
        rgba(65, 216, 221, 1) 100%
    );
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    //------------------------------------------------------->
    @media screen and (max-width: 768px) {
        min-height: 100vh;
        height: 100%;
    }
`;

export const StyledContainerBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 70%;
    width: 50%;
    background-color: ${cinzaClaro};
    border-radius: 24px;
    box-shadow: 0 4px 50px 0 rgba(0, 0, 0, 0.5);
    padding: 2.5%;
    //-------------------------------------------------------->
    @media screen and (max-width: 768px) {
        height: 60%;
        width: 85%;
        padding: 10%;
    }
`;

export const StyledContainerBoxInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 65%;
    width: 100%;
`;
