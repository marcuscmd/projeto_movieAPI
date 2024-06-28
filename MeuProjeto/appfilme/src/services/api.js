import axios from "axios";


export default class userService {
    constructor() {
        this.axios = axios.create({
            baseURL: 'http://localhost:5200',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    async logar(user) {
        try {
            const response = await this.axios.post('/Usuario/Logar', user);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async cadastrar(user) {
        try {
            const response = await this.axios.post('/Usuario/Add', user);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // async buscarUsuarioPorEmail(email) {
    //     try {
    //         const response = await this.axios.get(`/Usuario/BuscarPorEmail/${email}`);
    //         return response.data;
    //     } catch (error) {
    //         throw error;
    //     }
    // }
}