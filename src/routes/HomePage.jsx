// COMPONENTS IMPORT
import { Banners } from "../components/Banners"


// STYLED COMPONENTS IMPORT
import { Container } from "../css/HomePageCSS"

export function HomePage(){

    return (
        <Container>
            <div className="banner">
                <Banners />
            </div>
            <main>
                <div className="advertising warning">
                    <h1>Segundo Passo</h1>
                    <ul>
                        <li><p>Leia atentamente as regras de participação do projeto.</p>
                        </li>
                        <li><p>Leia com atenção as informações da página de Teste de Conhecimentos.</p></li>
                    </ul>
                </div>
                <div className="events warning">
                    <h1>Aula do dia 11/01/2025</h1>
                    <h3>Evento de retorno as aulas</h3>
                    <p>Neste dia iremos fazer uma introdução sobre as carreiras mais relevantes no mercado atual.</p>
                </div>
            </main>
            <footer>
                teste
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3603077811733179"
                     crossorigin="anonymous"></script>
            </footer>
        </Container>
    )
}