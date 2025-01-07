import styled from 'styled-components'
import bgRegister from '../assets/bgRegister.jpg'
import {breakpoints} from '../../css/Breackpoints'

const Container = styled.div`
    display: flex;
    align-items: center;
    max-width: 1100px;
    height: 720px;
    margin: auto auto;
    border: 1px solid white;
    border-radius: 15px;
    overflow: hidden;
    color: var(--color-ice);

    @media ${breakpoints.lg}{
        margin-inline: 1.2rem;

    }

    @media ${breakpoints.md}{
        width: 100%;
    }

`

const BannerLogin = styled.div`
    flex: 2;
    height: 100%;
    background: url(${bgRegister}) no-repeat center;
    background-size: cover;

        & .filter{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: rgba(0,0,0,.6);
            backdrop-filter: blur(2px);
            width: 100%;
            height: 100%;

            & #imgLogo {
                display: flex;
                flex-direction: column;

                & img {
                    margin: 20px auto;
                    max-width: 35%;
                }
            }

            & #description {
                margin: 0 auto;
                height: 40%;
                width: 80%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                text-align: justify;

                & h2 {
                    text-align: center;
                    font-size: 2.5rem;
                }

                & h4 {
                    text-align: center;
                    font-size: 1.4rem;
                    text-shadow: 2px 2px 2px var(--color-default);
                }
                
                & p {
                    font-size: 1.1rem;
                    text-shadow: 2px 2px 2px var(--color-default);
                }
            }
        }

    @media ${breakpoints.md}{
        display: none;
    }
`

const FormSignContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex: 1;

    height: 100%;
    background-color: var(--color-ice);
    color: var(--color-pink);
    
    p {
        justify-content: center;

        @media ${breakpoints.lgs}{
            display: flex;
            flex-wrap: wrap;
            gap: .6rem;
        }

        @media ${breakpoints.sms}{
            margin-inline: .4rem;
        }
    }

    p span {
    color: var(--color-purple);
    font-weight: bold;
    cursor: pointer;
    }
`


export {Container, BannerLogin, FormSignContainer}