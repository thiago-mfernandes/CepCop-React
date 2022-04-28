import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Coordenadores from "./pages/coordenadores";
import Supervisores from "./pages/supervisores";
import Estagiarios from "./pages/estagiarios";
import Analisantes from "./pages/analisantes";
import Atendimentos from "./pages/atendimentos";
import Cursos from './pages/cursos';
import Turmas from './pages/turmas';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Coordenadores" element={<Coordenadores />} />
            <Route path="/Supervisores" element={<Supervisores />} />
            <Route path="/Estagiarios" element={<Estagiarios />} />
            <Route path="/Analisantes" element={<Analisantes />} />
            <Route path="/Atendimentos" element={<Atendimentos />} />
            <Route path="/Cursos" element={<Cursos />} />
            <Route path="/Turmas" element={<Turmas />} />
        </Routes>
    );
}
