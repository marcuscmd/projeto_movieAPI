import facebookImg from '../assets/facebook.png';
import instagraImg from '../assets/instagram.png';
import youtubeImg from '../assets/youtube.png';
import { Container, Content } from './styles';


export function Footer({ OpenModal }) {
    return (
        <Container>
            <hr />
            <div>
                <Content>
                    <h4>MarColaFlix</h4>
                    <div>
                        <img src={facebookImg} alt="facebook" />
                        <img src={instagraImg} alt="Instagram" />
                        <img src={youtubeImg} alt="Youtube" />
                    </div>
                </Content>
                <Content>
                    <h4>MarColaFlix</h4>
                    <div>

                    </div>
                </Content>
                <Content>
                    <h4>MarColaFlix</h4>
                    <div>
                    </div>
                </Content>
            </div>

        </Container>
    )
}