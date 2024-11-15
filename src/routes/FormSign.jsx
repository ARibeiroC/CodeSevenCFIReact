import {SignUp} from '../components/SignUp'
import { SignIn } from '../components/SignIn'
import logo from '../assets/completeLogoAcademy.png'
import '../css/FormSign.css'


export function FormSign(){
    return (
        <div id="container">
            <div id="img-login">
                <div className="filter">
                <div id="imgLogo">
                    <img src={logo} alt="Imagem do logo tipo da Code Seven Academy" />
                </div>
                <div id="description">
                    <h2>Bem Vindo!</h2>
                    <h4>Se você chegou aqui, é porque deseja se destacar dos demais, e este é o primeiro passo para o seu sucesso!</h4>
                    <p>O projeto CFI, tem como principal objetivo preparar nossos alunos para o mercado de trabalho, colocando-os na vivência de um ambiente profissional, auxiliando assim nos medos, inseguranças, como também orientando-os em seus potenciais profissionais.</p>
                </div>
                </div>
            </div>
            <div id="form-sign">
                <SignUp />
            </div>
        </div>
    )
}