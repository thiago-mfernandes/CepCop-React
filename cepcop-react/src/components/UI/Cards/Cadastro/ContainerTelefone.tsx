import IChildProp from "src/components/Interfaces/IChildProp";
import styled from "styled-components";
import { cinzaMedio } from "../../variaveis";

const StyledContainerTelefone = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: 1px solid ${cinzaMedio};
    border-bottom: 1px solid ${cinzaMedio};
    margin: 7.5% 0;
`;

export default function ContainerTelefone(props: IChildProp) {
    return <StyledContainerTelefone>{props.children}</StyledContainerTelefone>;
}
