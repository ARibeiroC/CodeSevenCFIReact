import { useState, useRef, useEffect } from "react"
import { Button } from "./Button"
import { useNavigate } from "react-router-dom"

// HOOKS IMPORT
import { useFetch } from '../hooks/useFetch'
import { useValidate } from "../hooks/useValidate"
import { useToken} from "../hooks/useToken"


// STYLED COMPONENTS IMPORT
import { Container, Form } from "../css/SignCSS"

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

    return (
        <Container>
            <h2>Sign In</h2>
            <Form onSubmit={handleSubmit}>
                <label>
                    <span>Matricula</span>
                    <input
                        ref={registerCandidate}
                        type="text" 
                        placeholder="Ex: 001234"
                        value={register}
                        onChange={(e)=>{onChangeRegister(e.target.value)}}
                        maxLength={6}
                        required
                        />
                </label>
                <label>
                    <span>Senha</span>
                    <input
                        type="password"
                        placeholder="Ex: 123" 
                        value={password}
                        onChange={(e)=>{onChangePassword(e.target.value)}}
                        maxLength={3}
                        required
                        />
                </label>
                <Button style="signin" text="Entrar"/>
            </Form>
        </Container>
    )
}