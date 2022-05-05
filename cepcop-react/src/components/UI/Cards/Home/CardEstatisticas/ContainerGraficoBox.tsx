import React from "react";
import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledContainerGraficoBox } from "./styled";

function ContainerGraficoBox(props: IChildProp) {
    return (
        <StyledContainerGraficoBox>{props.children}</StyledContainerGraficoBox>
    );
}

export default ContainerGraficoBox;
