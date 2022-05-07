import styled from "styled-components";
import IChildProp from "src/components/Interfaces/IChildProp";

export const StyledContainerGrafico = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 5% 0;
    padding: 3% 0;
`;

export default function ContainerGrafico(props: IChildProp) {
    return <StyledContainerGrafico>{props.children}</StyledContainerGrafico>;
}
