import React from "react";
import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledContainerInfo } from "./styled";

function ContainerInfo(props: IChildProp) {
    return <StyledContainerInfo>{props.children}</StyledContainerInfo>;
}

export default ContainerInfo;
