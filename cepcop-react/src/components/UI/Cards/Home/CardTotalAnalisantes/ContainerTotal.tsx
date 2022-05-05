import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledContainerTotal } from "./styled";

function ContainerTotal(props: IChildProp) {
    return (
        <StyledContainerTotal>
            {props.children}
        </StyledContainerTotal>
    )
}

export default ContainerTotal