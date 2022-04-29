import React from "react";
import { StyledContainerInfo } from "./styled";

function ContainerInfo(props: { children: React.ReactNode }) {
    return <StyledContainerInfo>{props.children}</StyledContainerInfo>;
}

export default ContainerInfo;
