import api from "./api";

export const login = async (user) => {
    try {
        const response = await api.put('/Usuario/Logar', user);
        return response.data;
    } catch (error) {
        alert('Falha ao realizar login');
        throw error;
    }

}