import { useEffect, useState } from "react"
import '../css/Sign.css'
import { Button } from "./Button"

export function SignUp(){
    const [candidate, setCandidate] = useState([])
    const [register, setRegister] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [nameResponsible, setNameResponsible] = useState('')
    const [phoneResponsible, setPhoneResponsible] = useState('')


    const handleSubmit = (e)=>{
        e.preventDefault()   
        setCandidate([register, name, email, phone, nameResponsible, phoneResponsible])
    }

    const showCandidate = ()=>{
        console.log(candidate)
    }

    useEffect(()=>{
        showCandidate()
    },[candidate])

    return (
        <div className="sign">
            <h2 className="title">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label className="labels">
                    <span className="spans">Matricula</span>
                    <input
                        className="inputs" 
                        type="text" 
                        placeholder="Ex: 001234"
                        value={register}
                        onChange={(e)=>{setRegister(e.target.value)}}
                        />
                </label>
                <label className="labels">
                    <span className="spans">Nome Completo</span>
                    <input
                        className="inputs" 
                        type="text"
                        placeholder="Ex: José da Costa Filho" 
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                        />
                </label>
                <label className="labels">
                    <span className="spans">E-mail</span>
                    <input
                        className="inputs"
                        type="email"
                        placeholder="Ex: primeironome@email.com"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        />
                </label>
                <label className="labels">
                    <span className="spans">Celular de Candidato</span>
                    <input
                        className="inputs"
                        type="text"
                        placeholder="(xx) 99999-0000"
                        value={phone}
                        onChange={(e)=>{setPhone(e.target.value)}}
                        />
                </label>
                <label className="labels">
                    <span className="spans">Nome do Responsável</span>
                    <input
                        className="inputs"
                        type="text"
                        placeholder="Ex: José da Costa Filho"
                        value={nameResponsible}
                        onChange={(e)=>{setNameResponsible(e.target.value)}}
                        />
                </label>
                <label className="labels">
                    <span className="spans">Celular do Responsável</span>
                    <input
                        className="inputs"
                        type="text"
                        placeholder="(xx) 99999-0000"
                        value={phoneResponsible}
                        onChange={(e)=>{setPhoneResponsible(e.target.value)}}
                        />
                </label>
                <Button style='signup' text="Candidatar-se" action={e=> {}} />
            </form>
            <p>Eu já tenho um registro! <span>Login</span></p>
        </div>
    )
}