import { useEffect } from 'react';
import marcolaImg from '../../assets/marcolaLogo.png';
import { FaUser } from 'react-icons/fa';
import { useAuth } from '../auth/authContext';
import { Container, Content } from "./styles";
import { useNavigate } from 'react-router-dom';


export function Header({ showUser }) {
    const { user, logar } = useAuth();
    const navigate = useNavigate();



    const handleLogin = async (userData) => {
        try {
            const logged = await logar(userData);
            console.log('Usuário logado:', logged);
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    }

    const handleUserClick = () => {
        navigate('/atualizarUsuario');
    }

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                const userData = JSON.parse(storedUser);
                if (userData && !user) {
                    handleLogin(userData);
                }
            } catch (error) {
                console.error('Erro ao parsear o usuário armazenado:', error);
            }
        }

    }, [user]);


    return (
        <Container>
            <Content>
                <img src={marcolaImg} alt="MarcolaFlix" />
                {showUser && <button onClick={handleUserClick}>{showUser && user && <span>{user.nome_Usuario}</span>}<FaUser /></button>}
            </Content>
        </Container>
    )
}