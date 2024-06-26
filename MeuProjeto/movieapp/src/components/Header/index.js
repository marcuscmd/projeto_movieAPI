import marcolaImg from '../../assets/marcolaFlix.png'
import { Container, Content } from "./styles"


export function Header({OpenModal}){
    return (
        <Container>
            <Content>
                <img src={marcolaImg} alt="MarcolaFlix" />
            </Content>
        </Container>
    )
}