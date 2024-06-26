import { useState } from "react";
import React from "react";
import { Container, Form } from './styles';
import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import { Input } from "../../components/Input/input";
import { Botao } from "../../components/Botao/botao";
import { ValidarEmail, ValidarSenha } from "../../utils/validar";


export const Login = () => {
    const[loading, setLoading] = useState(false);
    const [form, setForm] = useState('');

    const handleChange = (event) => {
        console.log('digitando: ', event.target.name, event.target.value)
        setForm({...form, [event.target.name]: event.target.value });
        console.log('Form', form);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            alert('Formulário enviado');
            setLoading(false);
        } catch (error) {
            alert(error.message || 'Ocorreu um erro ao tentar enviar o formulário' );
        }
    }

    const validarInput = () => {
        return ValidarEmail(form.email) && ValidarSenha(form.password);
    }

    return (
        <>
            <Header />
            <Container>
                <Form>
                    <h1>Login</h1>
                    <Input
                        name='email'
                        placeholder='Seu e-mail'
                        onChange={handleChange}
                        type='email'
                    />
                    <Input
                        name='password'
                        placeholder='Sua Senha'
                        onChange={handleChange}
                        type='password'
                    />

                    <Botao 
                        type='submit'
                        text="Entrar"
                        onClick={handleSubmit}
                        disabled={setLoading === true || !validarInput()}
                    />
                    <div>
                        <p>Não possui conta? Clique </p>
                        <a>Aqui</a>
                    </div>
                </Form>
            </Container>
            <Footer />
        </>
    )
}