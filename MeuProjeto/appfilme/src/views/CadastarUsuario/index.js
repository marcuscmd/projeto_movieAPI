import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ValidarEmail, ValidarSenha } from "../../utils/validar";
import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import { Input } from "../../components/Input/input";
import { Botao } from "../../components/Botao/botao";
import { H2, Container, Form } from "./styles";
import { BotaoCustom } from "../../components/Botao/styles";
import userService from "../../services/api";

const user = new userService();


export const CadastrarUsuario = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        nome_Usuario: '',
        email: '',
        senha: '',
        nome: '',
        sobrenome: '',
    });
    const navigate = useNavigate();


    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
        console.log('Form', form)
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            const response = await user.cadastrar(form);
            console.log('response', response);
            if (response) {
                alert("Usuario Cadastrado com sucesso!");
                navigate("/")
            }
            setLoading(false);
        } catch (error) {
            alert("Falha ao cadastrar usuario");
            setLoading(false);
        }

    }

    return (
        <>
            <Header />
            <H2>Cadastrar Usuario</H2>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Input
                        name='nome_Usuario'
                        placeholder='Usuario'
                        onChange={handleChange}
                        type='text'
                        value={form.nome_Usuario}
                        required
                    />
                    <Input
                        name='email'
                        placeholder='Email'
                        onChange={handleChange}
                        type='email'
                        value={form.email}
                        required
                    />
                    <Input
                        name='senha'
                        placeholder='Senha'
                        onChange={handleChange}
                        type='password'
                        value={form.senha}
                        required
                    />
                    <Input
                        name='nome'
                        placeholder='Nome'
                        onChange={handleChange}
                        type='text'
                        value={form.nome}
                        required
                    />
                    <Input
                        name='sobrenome'
                        placeholder='Sobrenome'
                        onChange={handleChange}
                        type='text'
                        value={form.sobrenome}
                        required
                    />
                    <Botao type="submit" text="Cadastrar" />
                </Form>
            </Container>
            <Footer />
        </>
    )
}