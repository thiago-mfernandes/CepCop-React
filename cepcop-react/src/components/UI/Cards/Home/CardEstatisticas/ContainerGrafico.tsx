import React from "react";
import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledContainerGrafico } from "./styled";

function ContainerGrafico(props: IChildProp) {
    return <StyledContainerGrafico>{props.children}</StyledContainerGrafico>;
}

export default ContainerGrafico;
