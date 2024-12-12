import styled from "styled-components";
import {breakpoints} from './Breackpoints' 
const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 90%;

    & h2 {
        text-shadow: 2px 2px 2px var(--color-default);
        font-size: 2.5rem;
        margin-bottom: 2rem;

        @media ${breakpoints.md} {
            text-align:center;
        }
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

    .logo-media-query {
        display: none;
    }

    @media ${breakpoints.md}{
        padding: 0 1rem;
        
        .logo-media-query {
            display: block;
            width: 100%;
            text-align: center;
            margin-bottom: 2rem;
                & img{
                    max-width: 40%;
                }
        }
    }
`

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export {Container, FormStyled}