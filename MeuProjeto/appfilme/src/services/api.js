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
}