import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Adicionar from "./Adicionar";
import Buscar from "./Buscar";
import styled from "styled-components";
import { brancoBg } from "../UI/variaveis";
const CardAcoes = styled.section `
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
    return (_jsxs(CardAcoes, { children: [_jsx(Adicionar, {}), _jsx(Buscar, {})] }));
}
export default Acoes;
//# sourceMappingURL=index.js.map