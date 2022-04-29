import {
    MdDescription,
    MdExitToApp,
    MdGroups,
    MdHome,
    MdOutlineSettings,
    MdPendingActions,
    MdPeopleOutline,
    MdSchool,
    MdSupervisorAccount,
} from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

import { NavLista, NavItem, NavIcon, NavLink } from "./styledComponents";
import { Link } from "react-router-dom";

function Navbar() {
    const navItens = [
        { id: 1, icone: <MdHome />, nome: "Home", rota: "/home" },
        {
            id: 2,
            icone: <MdSupervisorAccount />,
            nome: "Coordenadores",
        },
        {
            id: 3,
            icone: <MdPeopleOutline />,
            nome: "Supervisores",
        },
        {
            id: 4,
            icone: <MdSchool />,
            nome: "Estagiários ",
        },
        {
            id: 5,
            icone: <MdDescription />,
            nome: "Analisantes",
        },
        {
            id: 6,
            icone: <MdPendingActions />,
            nome: "Atendimentos",
        },
        { id: 7, icone: <MdGroups />, nome: "Turmas", rota: "/Turmas" },
        { id: 8, icone: <FaGraduationCap />, nome: "Cursos", rota: "/Cursos" },
        {
            id: 9,
            icone: <MdOutlineSettings />,
            nome: "Configurações",
        },
        { id: 10, icone: <MdExitToApp />, nome: "Sair" },
    ];

    return (
        <nav>
            <NavLista>
                {navItens.map((navitem, key) => (
                    <NavItem key={key}>
                        <NavIcon>{navitem.icone}</NavIcon>
                        <NavLink>{navitem.nome}</NavLink>
                    </NavItem>
                ))}
            </NavLista>
        </nav>
    );
}

export default Navbar;

