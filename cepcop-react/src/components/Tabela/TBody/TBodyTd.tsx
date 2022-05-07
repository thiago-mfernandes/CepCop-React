import IBodyTdProps from "src/components/Interfaces/IBodyTdProps";
import { cinzaMedio } from "src/components/UI/variaveis";
import styled from "styled-components";

const StyledTBodyTd = styled.td`
    border-right: 1px solid ${cinzaMedio};
    font-size: 0.75rem;
    padding: 0.75%;
    text-align: center;
    vertical-align: middle;
    //botoes de ação editar e deletar;
    &:last-of-type {
        border-right: none;
        margin: auto 0;
        text-align: center;
        vertical-align: middle;
    }

    @media screen and (max-width: 768px) {
        display: block;
        width: 100%;
        //esses 30% protege o texto de fazer sobreposição no data-label
        padding: 5% 5% 5% 30%;
        text-align: right;
        position: relative;
        border-right: none;
        border-bottom: 1px solid ${cinzaMedio};
        &::before {
            content: attr(data-label);
            position: absolute;
            left: 0;
            width: 50%;
            padding-left: 15px;
            font-size: 0.75rem;
            font-weight: bold;
            text-align: left;
            vertical-align: middle;
        }
        &:last-of-type {
            text-align: right;
        }
    }
`;

export default function TBodyTd(props: IBodyTdProps) {
    return (
        <StyledTBodyTd data-label={props.dataLabel}>
            {props.children}
        </StyledTBodyTd>
    );
}
