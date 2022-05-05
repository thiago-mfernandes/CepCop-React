import React from "react";
import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledContainerLegenda } from "./styled";

function ContainerLegenda(props: IChildProp) {
    return <StyledContainerLegenda>{props.children}</StyledContainerLegenda>;
}

export default ContainerLegenda;
