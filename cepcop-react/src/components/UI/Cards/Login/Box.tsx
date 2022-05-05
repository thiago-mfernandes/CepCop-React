import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledContainerBox } from "./styled";

function Box(props: IChildProp) {
    return (
        <StyledContainerBox>{props.children}</StyledContainerBox>
    )
}

export default Box