import styled from "styled-components";
import IChildProp from "../../Interfaces/IChildProp";

const StyledThead = styled.thead`
    height: 5vh;
    @media screen and (max-width: 768px) {
        display: none;
        width: 100%;
    }
`;

export default function THead(props: IChildProp) {
    return <StyledThead>{props.children}</StyledThead>;
}
