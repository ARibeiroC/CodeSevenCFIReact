import { BiCaretLeft, BiCaretRight  } from "react-icons/bi";

// HOOKs
import { useEffect, useState } from "react";
import { useCarrossel } from "../hooks/useCarrossel";

// COMPONENTS IMPORT
import { Button } from "./Button";

// STYLED COMPONENTS IMPORT
import { Container } from "../css/CarrosselCSS";

export function Carrossel(){
    const {bgImg} = useCarrossel()

    return (
        <Container>
            <div className={bgImg}>
                <h1>INSCRIÇÕES ABERTA</h1>
                <h4>Curso de Formação de Instrutor</h4>
                {/* <Button text='Saiba mais...' onClick={console.log('clicou')}/> */}
            </div>
        </Container>
    )
}