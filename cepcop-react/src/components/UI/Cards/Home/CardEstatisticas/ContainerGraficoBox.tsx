import styled from "styled-components";
import IChildProp from "src/components/Interfaces/IChildProp";

export const StyledContainerGraficoBox = styled.div`
    display: flex;
    flex-direction: row;
    height: 20vh;
    width: 5%;
`;

export default function ContainerGraficoBox(props: IChildProp) {
    return (
        <StyledContainerGraficoBox>{props.children}</StyledContainerGraficoBox>
    );
}
