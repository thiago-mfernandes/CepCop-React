import React from "react";
import { StyledContainerLegenda } from "./styled";

function ContainerLegenda(props: {children: React.ReactNode}) {
    return (
        <StyledContainerLegenda>{props.children}</StyledContainerLegenda>
    )
}

export default ContainerLegenda