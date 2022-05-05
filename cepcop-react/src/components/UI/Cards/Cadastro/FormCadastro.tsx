import React from "react";
import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledFormCadastro } from "./styled";

function FormCadastro(props: IChildProp) {
    return <StyledFormCadastro>{props.children}</StyledFormCadastro>;
}

export default FormCadastro;
