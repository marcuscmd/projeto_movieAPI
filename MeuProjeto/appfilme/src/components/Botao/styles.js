import styled from "styled-components"

export const BotaoCustom = styled.button`
    color: #fff;
    font-size: 1.5rem;
    border: 1.7rem;
    background-color: #6a6a6a;
    border-radius: 8px;
    width: 100%;
    height: 3rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;

    ${props => props.disabled === false && `
        &:hover {
        background-color: #fff;
        color: #6a6a6a;
        }
    `}

    ${props => props.disabled && `
        opacity: 0.7;
    `}
`