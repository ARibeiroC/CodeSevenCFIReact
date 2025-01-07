// STYLED COMPONENTS IMPORT
import { Container } from "../css/BannerCSS";

export function Banners(){

    return (
        <Container>
            <div className={'backgroundImg3'}>
                <h1>INSCRIÇÕES ABERTA</h1>
                <h4>Curso de Formação de Instrutor</h4>
                {/* <Button text='Saiba mais...' onClick={console.log('clicou')}/> */}
            </div>
        </Container>
    )
}