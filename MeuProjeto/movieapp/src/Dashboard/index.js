import { Footer } from "../Footer";
import tela1Img from "../assets/tela1.png";
import tela2Img from "../assets/tela2.png";
import tela3Img from "../assets/tela3.png";
import { Container, Content } from "./styles";

export function Dashboard()
{
    return (
        <>
        <Container>
            <h4>O Melhor Site de Filmes Online</h4>
            <Content>
                <img src={tela1Img} alt="Tela 1" />
                <img src={tela2Img} alt="Tela 2" />
                <img src={tela3Img} alt="Tela 3" />
            </Content>
        </Container>
        <Footer />
        </>
    )
}