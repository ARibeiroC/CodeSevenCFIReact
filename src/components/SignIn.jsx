import { useEffect, useState, useRef } from "react"
import { Button } from "./Button"
import '../css/Sign.css'
import { useNavigate } from "react-router-dom"

// HOOKS IMPORT
import { useFetch } from '../hooks/useFetch'
import { useValidate } from "../hooks/useValidate"
import { useToken} from "../hooks/useToken"
import { useAuthLoginConnected } from "../hooks/useAuthUserConnected"

export function SignIn(){
    const uri = `${import.meta.env.VITE_API_URL}/candidates`
    const [register, setRegister] = useState('')
    const [password, setPassword] = useState('')
    const {data: candidates} = useFetch(uri)
    const registerCandidate = useRef(null)

    // HOOKS
    const navigate = useNavigate()
    const {validateInputNumber} = useValidate()
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(register, password)
        if (candidates){
            candidates.forEach((candidate)=>{
                if (candidate.registerCandidate === register && candidate.passwordCandidate === password){
                    localStorage.setItem('user', candidate.nameComplete)                    
                    localStorage.setItem('token',  useToken())                    
                    navigate("/area-do-candidato") 
                }
            })
        } else {
            console.log('Sem conexão com banco de dados')
        }
        setPassword('')
        setRegister('')
        registerCandidate.current.focus()
    }

    const onChangeRegister = (input)=>{
        const updateInput = validateInputNumber(input)
        setRegister(updateInput)
    }

    const onChangePassword = (input)=>{
        const updateInput = validateInputNumber(input)
        setPassword(updateInput)
    }
    
    const isConnected = useAuthLoginConnected('home')
    useEffect(()=>{
        if (isConnected){
            navigate('/')
        }
    },[])

    return (
        <div className="sign">
            <h2 className="title">Sign In</h2>
            <form onSubmit={handleSubmit}>
                <label className="labels">
                    <span className="spans">Matricula</span>
                    <input
                        ref={registerCandidate}
                        className="inputs"
                        type="text" 
                        placeholder="Ex: 001234"
                        value={register}
                        onChange={(e)=>{onChangeRegister(e.target.value)}}
                        maxLength={6}
                        required
                        />
                </label>
                <label className="labels">
                    <span className="spans">Senha</span>
                    <input 
                        className="inputs"
                        type="password"
                        placeholder="Ex: 123" 
                        value={password}
                        onChange={(e)=>{onChangePassword(e.target.value)}}
                        maxLength={3}
                        required
                        />
                </label>
                <Button style="signin" text="Entrar"/>
            </form>
        </div>
    )
}