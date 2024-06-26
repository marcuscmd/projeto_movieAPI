import Modal from 'react-modal';
import googleImg from '../../assets/google.png';
import { Container } from './styles';
import { ModalSing } from '../ModalSing';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContexto';
import { useNavigate } from 'react-router-dom';

import api from "../../services/api";


export function ModalLogin({ isOpen, onRequestClose, onSingRequest, onPressLogin }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <Modal isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container onSubmit={onPressLogin}>
                <h2>Login</h2>

                <input placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" >Log in</button>
                <p>Não possui conta? Clique <u><a href="#" onClick={onSingRequest}>Aqui</a></u></p>
                {/* <button type="submit" className='buton-google'>
                    <img src={googleImg} alt="google" />
                    Log in with Google
                </button> */}

            </Container>
        </Modal>
    )
}