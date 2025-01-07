import styled from "styled-components";

import bg from '../assets/events/capa-blog-10.png'

// HOOKs

export const Container = styled.div`
    background-size: cover;
    height: 350px;
    transition: .4s;
    color: var(--color-ice);
    text-align: center;

    .backgroundImg3 {
        width: 100%;
        height: 100%;
        background: url(${bg}) no-repeat center;
        background-blend-mode: darken;
        background-color: #00000066;
        background-size: 100% 250%;
        transition: .4s;
        

        display: flex;
        flex-direction: column;
        justify-content: center;

        & h1{
            padding-block: 1rem
            text-shadow: 2px 2px #FF0000;
        }

        & button{
            margin: 1rem auto;
            width: 150px;
        }
    }
`
