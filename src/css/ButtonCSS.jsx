import styled from "styled-components";

export const ButtonStyled = styled.button`
    padding: .6rem .4rem;
    background: var(--color-purple);
    color: var(--color-ice);
    font-size: 1.1rem;
    font-weight: bold;
    border: none;
    transition: .2s;
    
    &:hover {
        background: var(--color-pink);
    }

    &:active {
        box-shadow: 4px 4px 4px 0px inset var(--color-default);
        transform: translateY(1px);
    }
`

export const DisabledStyled = styled.button`
    padding: .6rem .4rem;
    background: var(--color-lightgray);
    color: var(--color-default);
    font-size: 1.1rem;
    font-weight: bold;
    border: 1px solid #555;
    opacity: .4;

    & :hover {
        background: var(--color-lightgray);
    }

    & :active {
        box-shadow: 0px 0px 0px 0px inset var(--color-default);
        transform: translateY(0px);
    }
`