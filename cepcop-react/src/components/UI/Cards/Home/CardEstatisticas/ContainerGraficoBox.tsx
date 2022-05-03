import React from "react";
import { StyledContainerGraficoBox } from "./styled";

function ContainerGraficoBox(props: {children: React.ReactNode}) {
    return (
        <StyledContainerGraficoBox>{props.children}</StyledContainerGraficoBox>
    )
}

export default ContainerGraficoBox