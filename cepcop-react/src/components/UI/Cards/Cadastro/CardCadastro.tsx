import React from "react";
import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledCardCadastro } from "./styled";

function CardCadastro(props: IChildProp) {
    return <StyledCardCadastro>{props.children}</StyledCardCadastro>;
}

export default CardCadastro;
