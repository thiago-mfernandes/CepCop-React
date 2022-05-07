import styled from "styled-components";
import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledContainer } from "./Container";

const StyledSecondContainer = styled(StyledContainer)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    border-bottom: none;
`;

function ContainerNaoRelacionados(props: IChildProp) {
    return <StyledSecondContainer>{props.children}</StyledSecondContainer>;
}

export default ContainerNaoRelacionados;
