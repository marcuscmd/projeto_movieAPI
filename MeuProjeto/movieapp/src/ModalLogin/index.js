import Modal from 'react-modal';
import { Container } from './styles';


export function ModalLogin({ isOpen, onRequestClose }) {
    return (
        <Modal isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Login</h2>

                <input placeholder="Email" />
                <input type="password" />

                <button type="submit" >Entrar</button>

            </Container>
        </Modal>
    )
}