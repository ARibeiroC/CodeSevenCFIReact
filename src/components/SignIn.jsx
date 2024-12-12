import { useState, useRef, useEffect, Form, useContext } from "react"
import { Button } from "./Button"
import { useNavigate } from "react-router-dom"

// IMAGES IMPORT
import logo from '../assets/simpleLogoPurple.png'

// HOOKS IMPORT
import { useFetch } from '../hooks/useFetch'
import { useValidate } from "../hooks/useValidate"
import { useToken} from "../hooks/useToken"


// STYLED COMPONENTS IMPORT
import { Container, FormStyled } from "../css/SignCSS"
import { UsersContext } from "../context/UsersContext"

export function SignIn(){

    const [register, setRegister] = useState('')
    const [password, setPassword] = useState('')
    const registerCandidate = useRef(null)

    // const {data: candidates, loading} = useFetch(`${import.meta.env.VITE_API_URL}/candidates`)
    const navigate = useNavigate()
    const {validateInputNumber} = useValidate()

     // CONTEXT IMPORT
     const {users, loading} = useContext(UsersContext)
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (users){
            users.forEach((user)=>{
                if (user.registerCandidate === register && user.passwordCandidate === password){
                    localStorage.setItem('user', user.nameComplete)                    
                    localStorage.setItem('token',  useToken())                    
                    return navigate("/area-do-candidato") 
                } else {
                    setPassword('')
                    setRegister('')
                    registerCandidate.current.focus()
                }
            })
        }
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
            <div className="logo-media-query">
                <img src={logo} alt="Logotipo simplificado da Code Seven Academy" />
            </div>
            <h2>Sign In</h2>
            <FormStyled onSubmit={handleSubmit}>
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
                {loading ? (
                    <Button wait={true} />
                ) : (
                    <Button text={"Entrar"} />
                )}
            </FormStyled>
        </Container>
    )
}