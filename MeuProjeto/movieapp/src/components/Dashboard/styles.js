import styled from "styled-components";

export const Container = styled.main`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem;

    h4 {
        text-align: center;
        color: var(--white);
        font-size: 1.6rem;
        padding-bottom: 1rem;
    }
`;

export const Content = styled.div`

    display: flex;
    flex-direction: column;
    
    img {
        max-height: 400px;
        margin-bottom: 1.5rem;

        opacity: 0.2;
    }
`;