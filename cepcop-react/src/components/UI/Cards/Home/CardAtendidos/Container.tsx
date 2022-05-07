import IChildProp from "src/components/Interfaces/IChildProp";
import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: auto 0;
    padding: 5% 0;
`;

export default function Container(props: IChildProp) {
    return <StyledContainer>{props.children}</StyledContainer>;
}
