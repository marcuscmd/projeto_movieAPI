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


export const CadastrarUsuario = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        email: '',
        senha: '',
    });
    const navigate = useNavigate();


    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const validarInput = () => {
        return ValidarEmail(form.email) && ValidarSenha(form.senha);
    }

    return (
        <>
            <Header />
            <H2>Cadastrar Usuario</H2>
            <Container>
                <Form>
                    <Input name="NomeUsuario" placeholder="Nome de Usuario" />
                    <Input name="email" placeholder="E-mail" type="email" />
                    <Input name="senha" placeholder="Senha" type="password" />
                    <Input name="nome" placeholder="Nome" type="text" />
                    <Input name="sobrenome" placeholder="Sobrenome" type="text" />
                    <Botao type="submit" text="Cadastrar" />
                </Form>
            </Container>
            <Footer />
        </>
    )
}