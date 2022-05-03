import styled from "styled-components";
import { brancoBg } from "../../../variaveis";

export const StyledHomeCard = styled.section`
    height: 95%;
    width: 95%;
    background-color: ${brancoBg};
    border-radius: 48px;
    box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.25);
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, auto);
    padding: 2.5% 10%;
    margin: 2.5% auto;

    //--------------------------------------------->
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(9, auto);
        background-color: unset;
        box-shadow: none;
        padding: 0 5%;
        margin: 0;
        width: 100%;
    }
`;
