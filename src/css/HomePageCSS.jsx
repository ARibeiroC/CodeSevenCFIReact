import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    
    /* position: fixed;
    right: 0; */
    width: 100%;
    min-height: 100vh;
    padding: 1rem;

    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 65% center;
    background-blend-mode: luminosity;
    background-size: 40%;
    background-color: var(--color-lightgray);
    background-image: url("/simpleLogoWhite.png");
    overflow-y: scroll;

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