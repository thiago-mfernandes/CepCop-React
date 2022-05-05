import React from "react";
import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledContainer } from "./styled";

function ContainerFundoAzul(props: IChildProp) {
    return (
    <StyledContainer>{props.children}</StyledContainer>
    );
}

export default ContainerFundoAzul;
