import React from "react";
import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledSection } from "./styled";

function ConfigCard(props: IChildProp) {
    return (
        <main>
            <StyledSection>{props.children}</StyledSection>
        </main>
    );
}

export default ConfigCard;
