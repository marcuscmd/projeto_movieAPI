import styled from "styled-components";

export const Container = styled.header`
    background: var(--background);
    border: 2px solid var(--bordas);
`

export const Content = styled.div`
    margin: 0;

    padding: 1rem 3rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: #000;
        background: var(--entrar);

        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;

        height: 2.5rem;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }
    }
`