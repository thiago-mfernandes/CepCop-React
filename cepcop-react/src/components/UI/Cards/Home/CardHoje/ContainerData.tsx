import React from "react";
import { StyledContainerData } from "./styled";

function ContainerData(props: {children:React.ReactNode}) {
    return (
        <StyledContainerData>
            {props.children}
        </StyledContainerData>
    )
}

export default ContainerData