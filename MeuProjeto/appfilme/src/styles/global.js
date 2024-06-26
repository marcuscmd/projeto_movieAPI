import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #212125;
        --bordas: #5E3535;
        --entrar: #2DFF39;
        --white: #fff;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    //font-size
    html {
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }
        @media (max-width: 720px){
            font-size: 87.5%; //14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 450px;
        background: var(--background);

        padding: 3rem;
        position: relative;

        border-radius: 0.3rem;
    }

    .rodape {
        margin: 0 auto;
        justify-content: center;
    }
`