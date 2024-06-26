import Modal from 'react-modal';
import googleImg from '../../assets/google.png';
import { Container } from './styles';

export function ModalSing({ isOpen, onRequestClose }) {
    return (
        <Modal isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar</h2>

                <input placeholder="Usuario" />
                <input type="Email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="Sobrenome"/>

                <button type="submit" >Sing in</button>
                <button type="submit" className='buton-google'>
                    <img src={googleImg} alt="google" />
                    Sing in with Google
                    </button>

            </Container>
        </Modal>
    )
}