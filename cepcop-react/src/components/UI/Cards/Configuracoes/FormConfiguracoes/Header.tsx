import React from "react";
import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledCardConfigHeader } from "./styled";

function Header(props: IChildProp) {
    return <StyledCardConfigHeader>{props.children}</StyledCardConfigHeader>;
}

export default Header;
