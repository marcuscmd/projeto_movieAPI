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
    }

`;