import styled from "styled-components";
import IChildProp from "src/components/Interfaces/IChildProp";

const StyledContainerBoxInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 65%;
    width: 100%;
`;

export default function BoxInput(props: IChildProp) {
    return <StyledContainerBoxInput>{props.children}</StyledContainerBoxInput>;
}
