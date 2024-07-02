import React from "react";
import { Login } from "../views/Login";
import { CadastrarUsuario } from "../views/CadastarUsuario/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../views/Home";
import { EditarUsuario } from "../views/AtualizarUsuario";

const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastrar" element={<CadastrarUsuario />} />
                <Route path="/atualizarUsuario" element={<EditarUsuario />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default Routering;