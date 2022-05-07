import styled from "styled-components";
import IChildProp from "src/components/Interfaces/IChildProp";

const StyledContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export default function ContainerInfo(props: IChildProp) {
    return <StyledContainerInfo>{props.children}</StyledContainerInfo>;
}
