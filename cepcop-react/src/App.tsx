import { Routes, Route } from "react-router-dom";
import "./App.css";
import Analisantes from "./pages/analisantes";
import Atendimentos from "./pages/atendimentos";
import Coordenadores from "./pages/coordenadores";
import Cursos from "./pages/cursos";
import Estagiarios from "./pages/estagiarios";
import Home from "./pages/home";
import Supervisores from "./pages/supervisores";
import Turmas from "./pages/turmas";
import Configuracoes from "./pages/configuracoes";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
//mockar o dado do usuario

export default function App() {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="cadastro" element={<Cadastro />} />
            <Route path="/home" element={<Home />} />
            <Route path="coordenadores" element={<Coordenadores />} />
            <Route path="supervisores" element={<Supervisores />} />
            <Route path="estagiarios" element={<Estagiarios />} />
            <Route path="analisantes" element={<Analisantes />} />
            <Route path="atendimentos" element={<Atendimentos />} />
            <Route path="cursos" element={<Cursos />} />
            <Route path="turmas" element={<Turmas />} />
            <Route path="configuracoes" element={<Configuracoes />} />
        </Routes>
    );
}
