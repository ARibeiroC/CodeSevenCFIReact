import styled from "styled-components";
import { breakpoints } from "./Breackpoints";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    width: 100%;
    min-height: 100vh;

    background-color: var(--color-lightgray);
    color: var(--color-default);

    h1 {
        color: var(--color-pink);
        text-shadow: 2px 2px rgba(0,0,0,.4);
        font-size: 2rem;
    }

    h3 {
        font-size: 1.4rem;
    }

    p{
        font-size:1.2rem;
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        padding: 1rem 2rem;

        .advertising {
            display: flex;
            flex-direction: column;
            gap: .6rem;

            ul {
                display: flex;
                flex-direction: column;
                gap: .6rem;
            }
        }

        .events {
            display: flex;
            flex-direction: column;
            gap: .6rem;            
        }

        .warning{
            background-color: var(--color-warning);
            border: 1px solid;
            padding: 2rem;
            box-shadow: 2px 2px 4px #000000dd;
        }
    }

    .banner{
        display: flex;
        flex-direction: column;
        
        max-height: 12.7rem;
        overflow: hidden;
        h1 {
            font-size: 3.6rem;
        }

        h4 {
            font-size: 1.6rem;
        }
    }

    @media (${breakpoints.mds}){
        h1 {
            font-size: 1.6rem;   
        }

        h3 {
            font-size: 1.2rem;
        }

        p {
            font-size: 1rem;
        }


        .banner {
            max-height: 10rem;
            h1 {
                font-size: 2.6rem;
            }

            h4 {
                font-size: 1.2rem;
            }
        }
    }

    
`