import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    height: 70vh;
    min-width: 100vw;
`
export const Form = styled.form`
    display: flex;
    padding: 2rem 3rem;
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

export const H2 = styled.h2`
    color: #ffffff;
    font-weight: bold;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;
    font-size: 2rem;
    margin-top: 2px;
`