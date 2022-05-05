import React from "react";
import { StyledTituloBox } from "./styled";

function TituloBox(props: { children: React.ReactNode }) {
    return <StyledTituloBox>{props.children}</StyledTituloBox>;
}

export default TituloBox