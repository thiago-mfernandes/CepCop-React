import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { azulEscuroFosco, cinzaEscuro, cinzaMedio, } from "src/components/UI/variaveis";
import styled from "styled-components";
import { MdDescription, MdGroups, MdHome, MdOutlineSettings, MdPendingActions, MdPeopleOutline, MdSchool, MdSupervisorAccount, } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
const NavLista = styled.ul `
  display: flex;
  flex-direction: column;
  //-------------------------------------------->
  @media screen and (max-width: 768px) {
    border: none;
    display: flex;
    flex-direction: row;
    height: 25vh;
    justify-content: flex-end;
    overflow-x: auto;
    width: 100%;
  }
`;
const NavItem = styled.li `
  align-items: center;
  border-bottom: 1px solid ${cinzaMedio};
  display: flex;
  flex-direction: row;
  height: 10vh;
  justify-content: flex-start;
  text-decoration: none;
  width: 100%;

  &:first-child {
    border-top: 1px solid ${cinzaMedio};
    margin-left: 0;
    margin-top: 7.5%;
    //-------------------------------------------->
    @media screen and (max-width: 768px) {
      border-bottom: 1px solid ${cinzaMedio}; //pode retirar se quiser
      border-top: none;
      flex-direction: row-reverse;
      justify-content: space-between;
      margin-top: 0;
      position: absolute;
      left: 0;
      top: 5%;
      width: 100vw;
    }
  }

  &:hover {
    border-left: 4px solid ${azulEscuroFosco};
    cursor: pointer;
    //adicionar o material icons aqui
    //.material-icons {
    /* color: $azul-medio-brilhante;
                }
                a {
                    color: black;
                } */

    //-------------------------------------------->
    @media screen and (max-width: 768px) {
      border-left: none;
    }
  }
  //-------------------------------------------->
  @media screen and (max-width: 768px) {
    align-items: center;
    border-bottom: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 5%;
    width: 100%;
  }
`;
const NavIcon = styled.i `
  color: ${cinzaEscuro};
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0 7.5%;

  //---------------------------------------------------->
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
const NavLink = styled.p `
  color: ${cinzaEscuro};
  font-size: 1rem;
  font-family: "Lato", sans-serif;
  text-decoration: none;
  width: 100%;
  //-------------------------------------------->
  @media screen and (max-width: 768px) {
    width: 75%;
    padding-left: 10%;
  }
`;
function Navbar() {
    const navItens = [
        { id: 1, icone: _jsx(MdHome, {}), nome: "Home" },
        { id: 2, icone: _jsx(MdSupervisorAccount, {}), nome: "Coordenadores" },
        { id: 3, icone: _jsx(MdPeopleOutline, {}), nome: "Supervisores" },
        { id: 4, icone: _jsx(MdSchool, {}), nome: "Estagiários " },
        { id: 5, icone: _jsx(MdDescription, {}), nome: "Analisantes" },
        { id: 6, icone: _jsx(MdPendingActions, {}), nome: "Atendimentos" },
        { id: 7, icone: _jsx(MdGroups, {}), nome: "Turmas" },
        { id: 8, icone: _jsx(FaGraduationCap, {}), nome: "Cursos" },
        { id: 9, icone: _jsx(MdOutlineSettings, {}), nome: "Configurações" },
    ];
    return (_jsx("nav", { children: _jsx(NavLista, { children: navItens.map((navitem, key) => (_jsxs(NavItem, { children: [_jsx(NavIcon, { children: navitem.icone }), _jsx(NavLink, { children: navitem.nome })] }, key))) }) }));
}
export default Navbar;
//# sourceMappingURL=index.js.map