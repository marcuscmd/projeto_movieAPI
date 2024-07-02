import { useState } from "react";
import React from "react";
import { Container, Form, H2 } from './styles';
import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import { Input } from "../../components/Input/input";
import { Botao } from "../../components/Botao/botao";
import { ValidarEmail, ValidarSenha } from "../../utils/validar";
import UserService from '../../services/api';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/auth/authContext";

const user = new UserService();

export const Login = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        nome_Usuario: '',
        senha: '',
    });
    const { logar } = useAuth();
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            const response = await logar(form);
            console.log('response', response);
            if (response) {
                alert('Login realizado com sucesso!');
                // localStorage.setItem('user', JSON.stringify(response.user));
                navigate('/home');
            }
            setLoading(false);
        } catch (error) {
            alert('Login ou senha invalidos!');
            setLoading(false);
        }
    }

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }



    const validarInput = () => {
        return ValidarEmail(form.nome_Usuario) && ValidarSenha(form.senha);
    }

    return (
        <>
            <Header showUser={false} />

            <Container>
                <Form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <Input
                        name='nome_Usuario'
                        placeholder='Usuario'
                        onChange={handleChange}
                        type='text'
                        value={form.nome_Usuario}
                        required
                    />
                    <Input
                        name='senha'
                        placeholder='Sua Senha'
                        onChange={handleChange}
                        type='password'
                        value={form.senha}
                        required
                    />

                    <Botao
                        type='submit'
                        text="Entrar"
                        // onClick={handleSubmit}
                        disabled={setLoading === true || !validarInput()}
                    />
                    <div>
                        <p>Não possui conta? Clique <a href="/cadastrar">Aqui</a></p>
                    </div>
                </Form>
            </Container>
            <Footer />
        </>
    )
}