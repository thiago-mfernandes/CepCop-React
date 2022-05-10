import IChildProp from "src/components/Interfaces/IChildProp";
import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export default function ContainerNascimento(props: IChildProp) {
    return (
        <StyledContainer>{props.children}</StyledContainer>
    )
}