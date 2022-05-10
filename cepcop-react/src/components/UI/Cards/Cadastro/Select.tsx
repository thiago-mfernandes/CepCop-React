import React from "react";
import styled from "styled-components";
import { azulEscuroFosco, cinzaEscuro } from "../../variaveis";

const StyledSelect = styled.select`
    height: 6.5vh;
    width: 100%;
    color: ${cinzaEscuro};
    font-size: 0.75rem;
    font-style: italic;
    font-weight: lighter;
    border: none;
    border-radius: 24px;
    padding-left: 5%;
    margin: 0;
    margin-bottom: 5%;
    &:focus {
        border: 1px solid ${azulEscuroFosco};
        outline: none;
    }
    @media screen and (max-width: 768px) {
        height: 5vh;
        width: 50%;
    }
`;

export default function Select(props: { valores: never[]; name?: string }) {
    return (
        <StyledSelect name={props.name} required>
            <option>Selecione</option>
            {props.valores.map((valor, index) => (
                <option value={valor} key={index}>
                    {valor}
                </option>
            ))}
        </StyledSelect>
    );
}
