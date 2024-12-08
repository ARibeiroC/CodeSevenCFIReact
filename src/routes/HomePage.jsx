import { useEffect} from "react"
import { useUserName } from "../hooks/useUserName"

// STYLED COMPONENTS IMPORT
import { Container } from "../css/HomePageCSS"



export function HomePage(){
    const user = useUserName()

    return (
        <Container>
            {/* <div className="advertising"></div> */}
            <section>
                <h1>Olá! {user}</h1>
                <h2>Parabéns por ter dado esse passo importante para sua carreira, isso mostra que você será um profissional diferenciado, o tipo mais raro de profissional, aquele que não aceita a estagnação.</h2>
                <p>Estaremos aqui para para poder lhe auxiliar nesta jornada que você esta preste a iniciar.</p>
                <p>Então, sente-se, fique bem acomodado, aperte os cintos, porque sua jornada começa agora!</p>
            </section>
        </Container>
    )
}