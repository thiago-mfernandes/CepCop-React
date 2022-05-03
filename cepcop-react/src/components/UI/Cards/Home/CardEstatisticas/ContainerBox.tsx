import React from "react";
import { StyledContainerBox } from "./styled";

function ContainerBox(props: {children: React.ReactNode}) {
    return (
        <StyledContainerBox>{props.children}</StyledContainerBox>
    )
}

export default ContainerBox