import styled from "styled-components";

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

        & button {
            position: relative;
            right: 15px;
            border: 1px solid red;
        }
    }

    & button {
        position: relative;
        left: 98%;
        top: 1%;
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
        border-radius: 100%;
        border: 1px solid var(--color-azure);

        & img {
            max-width: 100%;
            cursor: pointer;    
        }
    }

    & p {
        font-size: 1rem;
        padding: .5rem;
        font-weight: 600;
        color: var(--color-azure);
    }
`

export const NavMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    
    font-size: 1.2rem;
    padding: .6rem;
    height: 100%;

    & .item-menu {
        display: flex;
        align-items: center;
        justify-content: space-between;

        & :hover {
            color: var(--color-fuchsia);
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
    }

`