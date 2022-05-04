import React from "react";
import { StyledCardConfigHeader } from "./styled";

function Header(props: { children: React.ReactNode }) {
    return <StyledCardConfigHeader>{props.children}</StyledCardConfigHeader>;
}

export default Header;
