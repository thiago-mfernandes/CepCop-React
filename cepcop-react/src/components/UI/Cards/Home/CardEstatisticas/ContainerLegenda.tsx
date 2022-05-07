import styled from "styled-components";
import IChildProp from "src/components/Interfaces/IChildProp";

const StyledContainerLegenda = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`;

export default function ContainerLegenda(props: IChildProp) {
    return <StyledContainerLegenda>{props.children}</StyledContainerLegenda>;
}
