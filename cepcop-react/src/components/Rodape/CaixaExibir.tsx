import styled from "styled-components";
import IChildProp from "../Interfaces/IChildProp";
import { branco } from "../UI/variaveis";

const StyledFooterCaixaExibir = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    height: 4vh;
    width: 20%;
    border: none;
    background-color: ${branco};
    border-radius: 16px;
    @media screen and (max-width: 768px) {
        height: 2vh;
        width: 8vw;
    }
`;

export default function CaixaExibir(props: IChildProp) {
    return <StyledFooterCaixaExibir>{props.children}</StyledFooterCaixaExibir>;
}
