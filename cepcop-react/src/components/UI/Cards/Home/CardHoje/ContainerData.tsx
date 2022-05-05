import React from "react";
import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledContainerData } from "./styled";

function ContainerData(props: IChildProp) {
    return <StyledContainerData>{props.children}</StyledContainerData>;
}

export default ContainerData;
