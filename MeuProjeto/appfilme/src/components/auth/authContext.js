import { createContext, useContext, useEffect, useState } from "react";
import userService from '../../services/api';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const userservice = new userService();

    useEffect(() => {
        const stored = localStorage.getItem('user');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                setUser(parsed);
            } catch (error) {
                console.error('Erro ao parsear o usuário armazenado:', error);
                localStorage.removeItem('user');
            }
        }
    }, [])

    const logar = async (userData) => {
        try {
            const response = await userservice.logar(userData);
            setUser(response.user);
            localStorage.setItem('user', JSON.stringify(response.user));
            return response.user;
        } catch (error) {
            console.error('Erro ao realizar login:', error);
            throw error;
        }
    }

    const atualizarUsuario = async (novosDados) => {
        try {
            const response = await userservice.atualizarUsuario(novosDados);
            setUser(response.user);
            localStorage.setItem('user', JSON.stringify(response.user));
            return response.user;
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            throw error;
        }
    }

    const logout = async () => {
        setUser(null);
        localStorage.removeItem('user');
    }

    return (
        <AuthContext.Provider value={{ user, logar, atualizarUsuario, logout }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext);