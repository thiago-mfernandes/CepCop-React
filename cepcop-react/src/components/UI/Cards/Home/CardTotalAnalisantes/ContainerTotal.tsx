import styled from "styled-components";
import { StyledContainer } from "./Container";
import IChildProp from "src/components/Interfaces/IChildProp";

const StyledContainerTotal = styled(StyledContainer)`
    display: flex;
    flex-direction: column;
    border-bottom: none;
`;

export default function ContainerTotal(props: IChildProp) {
    return <StyledContainerTotal>{props.children}</StyledContainerTotal>;
}
