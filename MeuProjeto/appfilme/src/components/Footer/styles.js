import styled from "styled-components";

export const Container = styled.footer`

    width: 90%;
    justify-content: center;
    gap: 2rem;
    margin: 0 auto;

        hr{
            height: 2px;
            color: var(--white);
            width: 100%;
            
        }
        div {
        display: flex;

    }

`;

export const Content = styled.div`

    width: 25%;
    display: flex;
    flex-direction: column;
    padding: 0 0.2rem;

    img {
        width: 1.8rem;
        height: 1.8rem;
        margin: 0.5rem;
    }

    h4 {
        margin-bottom: 3.5rem;
        font-size: 1.5rem;
        color: #fff;
    }

    p {
        font-size: 0.8rem;
        color: #fff;
        margin-bottom: 1rem;
        margin-top: 0.5rem;
    }

`;