import styled from "styled-components";
import bg from '../assets/estagio/form2.jpg'

export const Container = styled.div`
    display: flex;

    color: var(--color-ice);
    height: 350px;
    border: 1px solid #00000099;
    background-image: url(${bg});
    background-position: center;
    
    & .filter {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: #00000099;
    }
    // & .sideImg {
    //     flex: 1;
    // }

    // & .sideText {
    //     flex: 1;
    // }
`