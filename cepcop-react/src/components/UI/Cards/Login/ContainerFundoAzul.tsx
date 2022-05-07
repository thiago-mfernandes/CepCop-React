import styled from "styled-components";
import IChildProp from "src/components/Interfaces/IChildProp";

const StyledContainerFundoAzul = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(
        155deg,
        rgba(85, 131, 238, 1) 0%,
        rgba(65, 216, 221, 1) 100%
    );
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    @media screen and (max-width: 768px) {
        min-height: 100vh;
        height: 100%;
    }
`;

export default function ContainerFundoAzul(props: IChildProp) {
    return (
        <StyledContainerFundoAzul>{props.children}</StyledContainerFundoAzul>
    );
}
