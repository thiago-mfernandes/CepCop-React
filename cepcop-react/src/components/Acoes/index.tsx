import Adicionar from "./Adicionar";
import Buscar from "./Buscar";
import styled from "styled-components";
import { brancoBg } from "../UI/variaveis";

const CardAcoes = styled.section`
    height: 85%;
    width: 95%;
    background-color: ${brancoBg};
    border-radius: 48px;
    box-shadow: 4px 4px 20px 0 rgb(0 0 0 / 25%);
    margin: 2.5% auto;
    overflow: auto;
    //----------------------------------------->
    @media screen and (max-width: 768px) {
        height: 100%;
        width: 100%;
        border-radius: 0;
    }
`;

function Acoes() {
    return (
        <CardAcoes>
            <Adicionar />
            <Buscar />
        </CardAcoes>
    );
}

export default Acoes;
