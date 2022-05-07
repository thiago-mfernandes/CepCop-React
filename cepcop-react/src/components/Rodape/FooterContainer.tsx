import styled from "styled-components";
import IChildProp from "../Interfaces/IChildProp";

const StyledFooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 30%;
    padding: 0 2%;
    @media screen and (max-width: 768px) {
        height: 100%;
        width: 300%;
        padding: 0;
        margin-right: 2.5%;
    }
    &:first-of-type {
        align-items: center;
        justify-content: flex-start;
        height: 100%;
        width: 50%;
        @media screen and (max-width: 768px) {
            height: 100%;
            width: 70%;
        }
    }
`;

export default function FooterContainer(props: IChildProp) {
    return <StyledFooterContainer>{props.children}</StyledFooterContainer>;
}
