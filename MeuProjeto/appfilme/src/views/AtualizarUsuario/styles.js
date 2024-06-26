import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    margin: 0.8rem 0;

    /* height: 70vh;
    min-width: 100vw; */
`

export const Form = styled.form`
    display: flex;
    padding: 3rem;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    background-color: #201d1d;
    border-radius: 5px;
    width: 100%;
    max-width: 450px;
    gap: 30px 0px;

    h1 {
        color: #ffffff;
        font-size: 1.8rem;
        font-weight: light;
    }

    p {
        color: #ffffff;
        font-size: 1rem;
    }

    a {
        color: #ffffff;
        font-size: 0.9rem;
        font-weight: bold;
        transition: color 0.2s ease-in-out;
    }
`
