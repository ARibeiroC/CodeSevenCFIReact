// STYLE CSS
import '../css/ConfirmRegister.css'


// Hook
import { useNavigate } from "react-router-dom"

export function ConfirmRegister(){
    const navigate = useNavigate()
    setTimeout(() => {
        navigate("/")
    }, 5000);
    return (
        <div className='confirm-register'>
            <h1>Sucesso!!!</h1>
            <h4>Seu cadastro foi realizado!!!</h4>
            <p>Aguarde... Estamos lhe redirecionando.</p>
        </div>
    )
}