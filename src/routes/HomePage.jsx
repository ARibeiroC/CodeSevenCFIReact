import { useEffect} from "react"
import { useUserName } from "../hooks/useUserName"

// COMPONENTS IMPORT
import { Carrossel } from "../components/Carrossel"


// STYLED COMPONENTS IMPORT
import { Container } from "../css/HomePageCSS"

export function HomePage(){
    const user = useUserName()

    return (
        <Container>
            {/* <div className="advertising"></div> */}
            <section>
                
            </section>
        </Container>
    )
}