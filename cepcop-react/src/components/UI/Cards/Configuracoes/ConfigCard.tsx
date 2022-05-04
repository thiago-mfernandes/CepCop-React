import React from "react";
import { StyledSection } from "./styled";

function ConfigCard(props: { children: React.ReactNode }) {
    return (
        <main>
            <StyledSection>{props.children}</StyledSection>
        </main>
    );
}

export default ConfigCard;
