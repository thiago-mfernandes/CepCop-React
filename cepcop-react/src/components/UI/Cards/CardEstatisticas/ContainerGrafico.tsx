import React from "react";
import { StyledContainerGrafico } from "./styled";

function ContainerGrafico(props: {children: React.ReactNode}) {
    return (
        <StyledContainerGrafico>{props.children}</StyledContainerGrafico>
    )
}

export default ContainerGrafico