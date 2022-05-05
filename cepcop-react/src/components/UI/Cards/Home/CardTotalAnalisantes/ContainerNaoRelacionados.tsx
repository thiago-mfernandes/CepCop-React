import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledSecondContainer } from "./styled";

function ContainerNaoRelacionados(props: IChildProp) {
    return (
        <StyledSecondContainer>{props.children}</StyledSecondContainer>
    )
}

export default ContainerNaoRelacionados