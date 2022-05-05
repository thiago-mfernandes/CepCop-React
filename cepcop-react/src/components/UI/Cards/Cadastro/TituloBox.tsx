import React from "react";
import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledTituloBox } from "./styled";

function TituloBox(props: IChildProp) {
    return <StyledTituloBox>{props.children}</StyledTituloBox>;
}

export default TituloBox;
