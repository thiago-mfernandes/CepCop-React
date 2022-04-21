import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
const NavLista = styled.ul `
    display: flex;
    flex-direction: column;
    //-------------------------------------------->
    @media screen and (max-width:768px) {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        height: 25vh;
        width: 100%;
        border: none;
        overflow-x: auto;
    }
`;
function Navbar() {
    const navItens = [
        { id: 1, nome: 'Home' },
        { id: 2, nome: 'Coordenadores' },
        { id: 3, nome: 'Supervisores' },
        { id: 4, nome: 'Estagiários ' },
        { id: 5, nome: 'Analisantes' },
        { id: 6, nome: 'Atendimentos' },
        { id: 7, nome: 'Turmas' },
        { id: 8, nome: 'Cursos' },
        { id: 9, nome: 'Configurações' }
    ];
    return (_jsx("nav", { children: _jsx(NavLista, { children: navItens.map((navitem, key) => (_jsx("li", Object.assign({ style: { textDecoration: 'none' }, className: 'header__menu___item' }, { children: _jsx("p", { children: navitem.nome }) }), key))) }) }));
}
export default Navbar;
//# sourceMappingURL=index.js.map