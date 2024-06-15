import facebookImg from '../assets/facebook.png';
import instagraImg from '../assets/instagram.png';
import youtubeImg from '../assets/youtube.png';
import '../styles/global';
import { Container, Content } from './styles';


export function Footer({ OpenModal }) {
    return (
        <Container>
            <hr />
            <div className="rodape">
                <Content>
                    <h4>MarColaFlix</h4>
                    <div>
                        <img src={facebookImg} alt="facebook" />
                        <img src={instagraImg} alt="Instagram" />
                        <img src={youtubeImg} alt="Youtube" />
                    </div>
                </Content>
                <Content>
                    <p>Contato</p>
                    <p>marcuscarvalho0608@gmail.com</p>
                    <p>marcola@movieflix.br</p>
                </Content>
                <Content>
                    <p>Sobre</p>
                    <p>Central de Ajuda</p>
                    <p>Apoiadores</p>
                </Content>
            </div>

        </Container>
    )
}