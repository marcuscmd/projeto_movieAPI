import React from "react";
import { Login } from "../views/Login";
import { CadastrarUsuario } from "../views/CadastarUsuario/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Login />} />
                <Route path="/cadastrar" element={<CadastrarUsuario />} />
                <Route path="/home" element={<h1>Tela Home</h1>} />
            </Routes>
        </Router>
    );
}

export default Routering;