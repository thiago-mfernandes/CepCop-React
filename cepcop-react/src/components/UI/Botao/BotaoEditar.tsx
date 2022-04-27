import React from "react";
import { MdModeEdit } from "react-icons/md";
import styled from "styled-components";
import { verdePadrao } from "../variaveis";

const StyledBotaoEditar = styled.i`
    color: ${verdePadrao};
    font-size: 1.25rem;
    cursor: pointer;
    padding-right: 2.5%;
    //---------------------------------------------->
    @media screen and (max-width: 768px) {
        font-size: 1;
        margin: 0 5%;
    }
`;

function BotaoEditar(id: any) {
    return (
        <StyledBotaoEditar id={id}>
            <MdModeEdit />
        </StyledBotaoEditar>
    );
}

export default BotaoEditar;
