import React from "react";
import { StyledContainer } from "./styled";

function ContainerFundoAzul(props: { children: React.ReactNode }) {
    return (
    <StyledContainer>{props.children}</StyledContainer>
    );
}

export default ContainerFundoAzul;
