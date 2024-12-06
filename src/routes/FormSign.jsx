import {SignUp} from '../components/SignUp'
import {SignIn} from '../components/SignIn'
import logo from '../assets/completeLogoAcademy.png'
import '../css/FormSign.css'
import { useAuthLoginConnected } from "../hooks/useAuthUserConnected"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// HOOKS
import { useForm } from '../hooks/useForm'



export function FormSign(){

    const forms = [<SignIn/>,<SignUp/>]
    const {currentForm, changeForm} = useForm(forms)
    
    const navigate = useNavigate()

    const isConnected = useAuthLoginConnected()
    console.log(isConnected)
    useEffect(()=>{
        if (isConnected){
            navigate('/area-do-candidato')
        }
    },[])

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
                {currentForm === 0 ? <SignIn /> : <SignUp />}

                {currentForm === 0 ? <p>Não é candidato ainda? <span onClick={(e)=> {changeForm(currentForm+1, e)} }>Candidate-se</span></p> : <p>Eu já tenho um registro! <span onClick={(e)=> {changeForm(currentForm-1, e)} }>Login</span></p>}
            </div>
        </div>
    )
}