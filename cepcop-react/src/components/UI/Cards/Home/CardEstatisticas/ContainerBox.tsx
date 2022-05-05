import React from "react";
import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledContainerBox } from "./styled";

function ContainerBox(props: IChildProp) {
    return <StyledContainerBox>{props.children}</StyledContainerBox>;
}

export default ContainerBox;
