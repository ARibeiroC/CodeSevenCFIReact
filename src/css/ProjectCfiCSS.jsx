import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 1rem;
    overflow-y: scroll;
    color: var(--color-default)
`

export const SectionAsk = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-block: 1rem;

    & h2 {
        font-size: 2.2rem;
        color: var(--color-pink)
    }

    & h3 {
        font-size: 1.8rem
        color
    }

    & p {
        font-size: 1.2rem
        text-align: justify;
    }

    & .warning {
        background-color: var(--color-warning);
        border: 1px solid;
        padding: 1rem;
        box-shadow: 2px 2px 4px #000000dd
    }
`