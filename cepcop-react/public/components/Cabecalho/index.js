import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "./Navbar";
import styled from "styled-components";
import { cinzaClaro, cinzaEscuro } from "../UI/variaveis";
const userImage = require("./../../img/vince-fleming2.jpg");
const StyledHeader = styled.header `
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: ${cinzaClaro};
    box-shadow: 4px 0px 20px 0px rgba(0,0,0,.25);
    padding: 3.5% 0 0;
    //----------------------------------------------->
    @media screen and (min-width:0px) and (max-width:768px) {
        box-shadow: 0 4px 50px 0 rgba(0,0,0,.15);
        margin-bottom: 12.5%;
        
    }     
`;
const Container = styled.div `
    display: flex;
    justify-content: center;
`;
const HeaderInfo = styled.div `
    width: 100%;
`;
const HeaderTitle = styled.h1 `
    color: ${cinzaEscuro};
    font-size: 75%;
    font-style: italic;
    font-weight: 300;
    font-family: 'Lato', sans-serif;
    text-align: center;

    //----------------------------------------->
    @media screen and (min-width:0px) and (max-width:768px) {
        padding-left: 5%;
        text-align: left;
    }
`;
function Header() {
    return (_jsxs(StyledHeader, { children: [_jsx(Container, { children: _jsxs(HeaderInfo, { children: [_jsx(HeaderTitle, { children: "Painel Administrativo" }), _jsxs("div", { children: [_jsxs("p", { children: ["Ol\u00E1 ", _jsx("span", { children: "fulano" })] }), _jsx("img", { className: 'header__img', src: userImage, alt: "" })] })] }) }), _jsx(Navbar, {})] }));
}
export default Header;
//# sourceMappingURL=index.js.map