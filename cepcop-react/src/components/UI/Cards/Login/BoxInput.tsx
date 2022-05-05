import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledContainerBoxInput } from "./styled";

function BoxInput(props: IChildProp) {
    return (
        <StyledContainerBoxInput>{props.children}</StyledContainerBoxInput>
    )
}

export default BoxInput