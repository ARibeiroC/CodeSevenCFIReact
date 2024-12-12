import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    
    width: 100%;
    min-height: 100vh;

    background-color: var(--color-lightgray);

    & .advertising {
        flex: .8;
    }

    & section {
        display: flex;
        flex-direction: column;
        flex: 6;
    }

    & section h1 {
        margin: 0 auto;
        font-size: 2.1rem;
    }
    
    & .partiners {    
        flex: .8;
        background-color: var(--color-discord);
    }
`