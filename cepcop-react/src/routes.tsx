import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Coordenadores from "./pages/coordenadores";
import Supervisores from "./pages/supervisores";

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Coordenadores" element={<Coordenadores />} />
            <Route path="/CSupervisores" element={<Supervisores />} />
        </Routes>
    );
}
