import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 90%;

    & h2 {
        text-shadow: 2px 2px 2px var(--color-default);
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }

    & label {
        display: flex;
        flex-direction: column;
        gap: .4rem;
    }

    & span {
        font-weight: bold;
        font-size: 1.1rem;
    }

    & input {
        padding: .6rem;
        font-size: 1rem;
        border-radius: .2rem;
        border: none;
        box-shadow: 2px 2px 2px inset var(--color-default);
        outline: none;
    }

    & button {
        margin-block: 1.5rem
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export {Container, Form}