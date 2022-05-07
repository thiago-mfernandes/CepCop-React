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
import { NavLista, NavItem, NavIcon } from "./styledNavComponents";
import CustomLink from "./customLink";

const navItens = [
    { id: 1, icone: <MdHome />, nome: "Home", rota: "/home" },
    {
        id: 2,
        icone: <MdSupervisorAccount />,
        nome: "Coordenadores",
        rota: "/coordenadores",
    },
    {
        id: 3,
        icone: <MdPeopleOutline />,
        nome: "Supervisores",
        rota: "/supervisores",
    },
    {
        id: 4,
        icone: <MdSchool />,
        nome: "Estagiários ",
        rota: "/estagiarios",
    },
    {
        id: 5,
        icone: <MdDescription />,
        nome: "Analisantes",
        rota: "/analisantes",
    },
    {
        id: 6,
        icone: <MdPendingActions />,
        nome: "Atendimentos",
        rota: "/atendimentos",
    },
    { id: 7, icone: <MdGroups />, nome: "Turmas", rota: "/turmas" },
    { id: 8, icone: <FaGraduationCap />, nome: "Cursos", rota: "/cursos" },
    {
        id: 9,
        icone: <MdOutlineSettings />,
        nome: "Configurações",
        rota: "/configuracoes",
    },
    { id: 10, icone: <MdExitToApp />, nome: "Sair", rota: "" },
];

export default function Navbar() {
    return (
        <nav>
            <NavLista>
                {navItens.map((navitem, key) => (
                    <NavItem key={key}>
                        <NavIcon>{navitem.icone}</NavIcon>
                        <CustomLink to={`${navitem.rota}`}>
                            {navitem.nome}
                        </CustomLink>
                    </NavItem>
                ))}
            </NavLista>
        </nav>
    );
}
