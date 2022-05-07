import styled from "styled-components";
import IChildProp from "src/components/Interfaces/IChildProp";

const StyledContainerTotal = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 5% 0;
    width: 100%;
    @media screen and (max-width: 768px) {
        padding: 2.5% 0;
    }
`;

export default function ContainerTotal(props: IChildProp) {
    return <StyledContainerTotal>{props.children}</StyledContainerTotal>;
}
