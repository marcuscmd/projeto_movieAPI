import React from "react";
import { BotaoCustom } from "./styles";
import { useAuth } from "../auth/authContext";
import { useNavigate } from "react-router-dom";

export const BotaoSair = ({ type, text, onClick, disabled }) => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            localStorage.removeItem('user');
            navigate('/');
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
        }
    };

    return (
        <BotaoCustom
            type={type}
            onClick={handleLogout}
            disabled={disabled}
        > {text} </BotaoCustom>
    )
}
