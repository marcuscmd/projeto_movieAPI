import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import Carrosel from "../../components/Carrosel";
import { AuthProvider } from "../../components/auth/authContext";
import { BotaoSair } from "../../components/botaoSair/botaoSair";


export const Home = () => {
    return (
        <>
            <Header showUser={true} />
            <Carrosel />
            <BotaoSair text='Sair' />
            <Footer />
        </>
    )
}