import React from "react";
import { StyledCard } from "./styled";

function Card(props: {children: React.ReactNode}) {
    return (
        <StyledCard>{props.children}</StyledCard>
    )
}

export default Card