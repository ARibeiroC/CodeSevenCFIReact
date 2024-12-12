import styled from "styled-components";
import {breakpoints} from './Breackpoints'


export const Container = styled.div`
    display: flex;
    flex: 1;

    color: var(--color-purple);
    background-color: var(--color-white);
    max-height: 100vh;
    overflow: hidden;

    @media ${breakpoints.mds}{
        flex-direction: column;
    }
`