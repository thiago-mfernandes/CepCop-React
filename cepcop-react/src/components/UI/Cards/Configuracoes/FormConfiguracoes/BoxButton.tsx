import React from "react";
import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledBoxButton } from "./styled";

function ButtonBox(props: IChildProp) {
    return <StyledBoxButton>{props.children}</StyledBoxButton>;
}

export default ButtonBox;
