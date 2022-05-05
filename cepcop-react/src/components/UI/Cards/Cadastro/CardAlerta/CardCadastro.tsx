import React from "react";
import { StyledCardCadastro } from "./styled";

function CardCadastro(props: { children: React.ReactNode }) {
    return <StyledCardCadastro>{props.children}</StyledCardCadastro>;
}

export default CardCadastro;
