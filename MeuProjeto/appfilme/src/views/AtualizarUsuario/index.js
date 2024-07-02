import { useState } from "react";
import { useAuth } from '../../components/auth/authContext';
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input/input";
import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import { Botao } from "../../components/Botao/botao";
import { ValidarEmail, ValidarSenha } from "../../utils/validar";
import { Container, Form } from './styles';


export const EditarUsuario = () => {
    const { user, atualizarUsuario } = useAuth();
    const [novoUsuario, setNovoUsuario] = useState({
        id: user?.id || 0,
        nome_Usuario: user?.nome_Usuario || '',
        email: user?.email || '',
        nome: user?.nome || '',
        sobrenome: user?.sobrenome || ''
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            const response = await atualizarUsuario(novoUsuario);
            console.log('response', response);
            if (response) {
                alert('Atualização usuario realizado com sucesso!');
                localStorage.setItem('user', JSON.stringify(response));
                navigate('/home');
            }
            setLoading(false);
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error); 
            alert('Erro. Falha na Atualização do Usuario!');
            setLoading(false);
        }
    }

    const handleChange = (event) => {
        setNovoUsuario({ ...novoUsuario, [event.target.name]: event.target.value });
    }



    const validarInput = () => {
        return ValidarEmail(novoUsuario.nome_Usuario) && ValidarSenha(novoUsuario.senha);
    }

    return (
        <>
            <Header showUser={true} />
            <Container>
                <Form onSubmit={handleSubmit}>
                    <h1>Atualizar Usuario</h1>
                    <Input
                        name='nome_Usuario'
                        placeholder='Usuario'
                        onChange={handleChange}
                        type='text'
                        value={novoUsuario.nome_Usuario}
                        required
                    />
                    <Input
                        name='senha'
                        placeholder='Senha nova'
                        onChange={handleChange}
                        type='password'
                        value={novoUsuario.senha}
                        required
                    />
                    <Input
                        name='email'
                        placeholder='Email'
                        onChange={handleChange}
                        type='text'
                        value={novoUsuario.email}
                        required
                    />
                    <Input
                        name='nome'
                        placeholder='Nome'
                        onChange={handleChange}
                        type='text'
                        value={novoUsuario.nome}
                        required
                    />
                    <Input
                        name='sobrenome'
                        placeholder='Sobrenome'
                        onChange={handleChange}
                        type='text'
                        value={novoUsuario.sobrenome}
                        required
                    />

                    <Botao
                        type='submit'
                        text="Entrar"
                        // onClick={handleSubmit}
                        disabled={setLoading === true || !validarInput()}
                    />
                </Form>
            </Container>
            <Footer />
        </>
    )
}