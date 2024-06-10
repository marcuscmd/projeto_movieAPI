import Modal from 'react-modal';
import googleImg from '../assets/google.png'
import { Container } from './styles';
import { ModalSing } from '../ModalSing';
import { useState } from 'react';


export function ModalLogin({ isOpen, onRequestClose, onSingRequest }) {

    
    return (
        <Modal isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Login</h2>

                <input placeholder="Email" />
                <input type="password" placeholder="Password"/>

                <button type="submit" >Log in</button>
                <p>Não possui conta? Clique <u><a href="#" onClick={onSingRequest}>Aqui</a></u></p>
                <button type="submit" className='buton-google'>
                    <img src={googleImg} alt="google" />
                    Log in with Google
                    </button>

            </Container>
        </Modal>
    )
}