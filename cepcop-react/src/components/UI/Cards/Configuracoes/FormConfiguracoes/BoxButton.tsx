import React from "react";
import { StyledBoxButton } from "./styled";

function ButtonBox(props: {children: React.ReactNode}) {
    return (
        <StyledBoxButton>{props.children}</StyledBoxButton>
    )
}

export default ButtonBox