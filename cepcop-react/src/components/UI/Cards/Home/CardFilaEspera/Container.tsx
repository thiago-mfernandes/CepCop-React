import styled from "styled-components";
import IChildProp from "src/components/Interfaces/IChildProp";
import { cinzaMedio } from "src/components/UI/variaveis";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 5vh;
    width: 100%;
    border-bottom: 1px solid ${cinzaMedio};
    margin: 2.5% 0;
    padding: 7.5% 0;
    @media screen and (max-width: 768px) {
        justify-content: center;
        border-bottom: none;
        margin: 15% auto;
    }
    &:last-of-type {
        border-bottom: none;
        padding: 5%;
        @media screen and (max-width: 768px) {
            display: none;
        }
    }
`;

export default function Container(props: IChildProp) {
    return <StyledContainer>{props.children}</StyledContainer>;
}
