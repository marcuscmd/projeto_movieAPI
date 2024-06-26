import { useState } from "react";
import { Header } from "../../components/Header";
import { ModalLogin } from "../../components/ModalLogin";
import { GlobalStyle } from "../../styles/global";
import { ModalSing } from "../../components/ModalSing";
import { Dashboard } from "../../components/Dashboard";
import { Footer } from "../../components/Footer";
import { useAuth } from "../../contexts/AuthContexto";
import { useNavigate } from "react-router-dom";
import { validatorEmail, validatorSenha } from "../../utils/Validator";
import api from '../../services/api';

export function Welcome() {
    const [modalLogin, setModalLogin] = useState(false);
    const [modalSing, setModalSing] = useState(false);

    const[loading, setLoading] = useState(false);
    const[form, setForm] = useState([]);

    const authContext = useAuth();
    const navigate = useNavigate();


    const OpenModal = () => {
        setModalLogin(true);
        setModalSing(false);
    }

    function CloseModalLogin() {
        setModalLogin(false);
    }

    const OpenSingModal = () => {
        setModalSing(true);
        setModalLogin(false);
    }

    function CloseSing() {
        setModalSing(false);
    }

    const handleSubmit = async (event) => { 
        event.preventDefault();
        try {
            setLoading(true);
            alert('Login realizado com sucesso!');
            setLoading(false);
            // let config = {
            //     method: 'put',
            //     maxBodyLength: Infinity,
            //     url: '/Usuario/Logar',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     data: {
            //         email: authContext.email,
            //         senha: authContext.senha,
            //     }
            // };

            // const response = await api.request(config)
            // console.log(JSON.stringify(response.data));
            // navigate('/home');

        } catch (error) {
            alert('Erro ao realizar login!');
        }
    };

    const validarInput = () => {
        return validatorEmail() && validatorSenha()
    }

    const handleChange = (event) => {
        console.log('Digitando: ', event.target.name, event.target.value);
        // setForm({...form, [event.target.name]: event.target.value });     
        // console.log('Form', form);
    }

    return (
        <>
            <Header OpenModal={OpenModal} />
            <Dashboard />

            <ModalLogin isOpen={modalLogin}
                onSingRequest={OpenSingModal}
                onRequestClose={CloseModalLogin}
                onPressLogin={handleChange}
            />

            <ModalSing isOpen={modalSing}
                onRequestClose={CloseSing}
            />
            <GlobalStyle />
            <Footer />
        </>
    )
}