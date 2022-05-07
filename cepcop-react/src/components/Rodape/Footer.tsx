import styled from "styled-components";
import IChildProp from "../Interfaces/IChildProp";

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 8vh;
    width: 100%;
    background-color: rgba(196, 196, 196, 0.7);
    grid-column: 2 / 3;
`;

export default function Footer(props: IChildProp) {
    return <StyledFooter>{props.children}</StyledFooter>;
}
