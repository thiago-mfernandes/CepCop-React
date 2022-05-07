import IChildProp from "src/components/Interfaces/IChildProp";
import styled from "styled-components";

const StyledBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-between;
    margin: 1% 0;
    width: 100%;
`;

export default function Box(props: IChildProp) {
    return <StyledBox>{props.children}</StyledBox>;
}
