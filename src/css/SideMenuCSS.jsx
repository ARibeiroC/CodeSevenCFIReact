import styled from "styled-components";
import {breakpoints} from './Breackpoints'

export const Content = styled.div`
    display:none;
`

export const Container = styled.div`
    color: var(--color-pink);
    width: 20%;
    justify-self: baseline;
    display: flex;
    flex-direction: column;

    background-color: var(--color-lightgray);
    box-shadow: 2px 0px 2px #222222aa;
    height: 100vh;
`

export const Dialog = styled.dialog`
    width: 100%;
    height: 100vh;
    margin: 1% auto;
    overflow: hidden;

    &::backdrop {
        display: flex;
        flex-direction: column;
        justify-content: baseline;

        margin: 0 auto;
        width: 100%;
        height: 100%;
        background-color: #222222aa;
        padding: .8rem;
    }

    & .btnClose {
        display: flex;
        justify-content: flex-end;

        padding: .6rem
    }

    & h2 {
        margin-inline: 1rem;
    }
        
    & p {
        margin-inline: 1rem;
    }
`

export const AreaControl = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: .6rem;
    font-size: 2rem;
    background-color: var(--color-purple);

    & .image-user-profile {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 150px;
        height: 150px;
        color: var(--color-azure);
        
        & img {
            max-width: 100%;
            cursor: pointer;
            border: 1px solid var(--color-azure);
            border-radius: 100%;
            
            @media ${breakpoints.lgs}{
                max-width: 80%
            }
        }
        
        @media ${breakpoints.mds}{
            display: none;
        }
    }

    & label {
        display: none;
    }

    & p {
        font-size: 1rem;
        padding: .5rem;
        font-weight: 600;
        color: var(--color-azure);
    }

    @media ${breakpoints.mds}{
        width: 100vw;
        flex-direction: row;

        align-items: center;
        justify-content: space-between;
        color: var(--color-ice);
        z-index: 1;
        & input {
            display: none;
        }
    }

    @media ${breakpoints.mds}{
        border-bottom: 1px solid var(--color-ice);
        height: 60px;
        & label {
            display: block;
        }
    }
`

export const NavMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    
    font-size: 1.2rem;
    padding: .6rem;
    height: 100%;
    transition: 1.5s ease;

    &.toggle-menu{
        top: 60px;
    }

    @media ${breakpoints.mds}{
        position: absolute;
        background-color: var(--color-fuchsia);
        height: auto;
        width: 100%;
        top: -135px;
    }

    & .item-menu {
        display: flex;

        & :hover {
            color: var(--color-fuchsia);

            @media ${breakpoints.md}{
                color: var(--color-ice);
            }
        }
    }

    & a {
        flex: 1;
        display: flex;
        justify-content: space-between;
        
        color: var(--color-purple);
        padding: .4rem;
        font-weight: bolder;
        text-decoration: none;
        transition: .4s;

        @media ${breakpoints.lgs}{
            // color: var(--color-ice);
            z-index: 0;
            & .icon {
                display: none;
            }
        }

        @media ${breakpoints.md}{
            color: var(--color-ice);
        }
    }



`