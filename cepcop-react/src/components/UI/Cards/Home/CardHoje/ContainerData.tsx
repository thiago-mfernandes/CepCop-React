import styled from "styled-components";
import IChildProp from "src/components/Interfaces/IChildProp";
import { cinzaMedio } from "src/components/UI/variaveis";

const StyledContainerData = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${cinzaMedio};
    padding: 0 5%;
    width: 100%;
    @media screen and (max-width: 768px) {
        align-items: flex-start;
        justify-content: center;
        border-bottom: none;
    }
`;

export default function ContainerData(props: IChildProp) {
    return <StyledContainerData>{props.children}</StyledContainerData>;
}
