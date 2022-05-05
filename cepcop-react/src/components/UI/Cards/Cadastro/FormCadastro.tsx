import React from "react";
import { StyledFormCadastro } from "./styled";

function FormCadastro(props: { children: React.ReactNode }) {
    return <StyledFormCadastro>{props.children}</StyledFormCadastro>;
}

export default FormCadastro