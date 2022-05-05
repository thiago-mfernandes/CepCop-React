import React from "react";
import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledCard } from "./styled";

function Card(props: IChildProp) {
    return <StyledCard>{props.children}</StyledCard>;
}

export default Card;
