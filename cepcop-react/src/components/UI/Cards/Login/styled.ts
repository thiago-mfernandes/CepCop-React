import styled from "styled-components";
import { cinzaClaro } from "../../variaveis";

export const StyledContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

export const StyledContainerBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 60%;
    width: 60%;
    background-color: ${cinzaClaro};
    border-radius: 24px;
    box-shadow: 0 4px 50px 0 rgba(0, 0, 0, 0.5);
    padding: 2.5%;
    //-------------------------------------------------------->
    @media screen and (max-width:768px) {
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
