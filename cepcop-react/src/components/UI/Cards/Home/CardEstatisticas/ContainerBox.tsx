import IChildProp from "src/components/Interfaces/IChildProp";
import styled from "styled-components";

export const StyledContainerBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    width: 50%;
`;

export default function ContainerBox(props: IChildProp) {
    return <StyledContainerBox>{props.children}</StyledContainerBox>;
}
