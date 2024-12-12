import styled from "styled-components";
import bg1 from '../assets/estagio/estagiario2.jpg'
import bg2 from '../assets/estagio/form.jpg'
import bg3 from '../assets/estagio/bg-low.jpg'

// HOOKs

export const Container = styled.div`
    background-size: cover;
    height: 350px;
    transition: .4s;
    color: var(--color-ice);
    text-align: center;

    .backgroundImg1 {
        width: 100%;
        height: 100%;
        background-blend-mode: darken;
        background-image: url(${bg1});
        background-position: center;
        background-size: cover;
        transition: .4s;
        background-color: #00000066;
        

        display: flex;
        flex-direction: column;
        justify-content: center;

        & h1{
            padding-block: 1rem
            text-shadow: 2px 2px 8px red;
        }

        & button{
            margin: 1rem auto;
            width: 150px;
        }
    }

    .backgroundImg2 {
        width: 100%;
        height: 100%;
        background-image: url(${bg2});
        background-position: center;
        background-size: cover;
        transition: .4s;
        background-blend-mode: darken;
        background-color: #00000066;
        

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

    .backgroundImg3 {
        width: 100%;
        height: 100%;
        background-blend-mode: darken;
        background-color: #00000066;
        background-image: url(${bg3});
        background-position: center;
        background-size: cover;
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
