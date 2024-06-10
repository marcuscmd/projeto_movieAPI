import styled from "styled-components";

export const Container = styled.form`
    h2 {
        color: #fff;
        font-size: 2rem;
        margin-bottom: 2rem;
        text-align: center;
        font-weight: 400;
    }
    p {
        font-size: 0.8rem;
        color: #d7d7d7;
        margin-top: 0.25rem;
        margin-left: 0.25rem;
    }
    a {
        cursor: pointer;
    }

    input {
        width: 100%;
        padding: 0 1rem;
        height: 2.5rem;
        border-radius: 0.5rem;

        border: none;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: #969cb3;
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button {
        width: 100%;
        padding: 0 1rem;
        height: 2.5rem;
        background: var(--entrar);
        color: #000;
        border: 0;
        font-size: 1rem;
        margin-top: 4.5rem;
        font-weight: 600;
        border-radius: 1.5rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }

    .buton-google {
        width: 100%;
        padding: 0 1rem;
        height: 2.5rem;
        background: #d7d7d7;
        color: #000;
        border: 1px solid var(--entrar);

        img {
            width: 0.9rem;
            height: 0.9rem;
            margin-right: 0.3rem;
        }

    }
`