import { Button } from "./Button"

// HOOKs
import { useNavigate } from 'react-router-dom'
import { useMaskPhoneNumber } from "../hooks/useMasks"
import { useFetch } from "../hooks/useFetch"
import { useValidate } from '../hooks/useValidate'
import { useEffect, useState } from "react"
import { useTransformArrayInObject } from "../hooks/useTransformArrayInObject"


// STYLED COMPONENTS IMPORT
import {Container, FormStyled} from '../css/SignCSS'


export function SignUp(){
    const [candidate, setCandidate] = useState([])
    const [registerCandidate, setRegisterCandidate] = useState('')
    const [nameComplete, setNameComplete] = useState('')
    const [emailCandidate, setEmailCandidate] = useState('')
    const [telephoneCandidate, setTelephoneCandidate] = useState('')
    const [nameResponsible, setNameResponsible] = useState('')
    const [cellphoneResponsible, setcellphoneResponsible] = useState('')

    // HOOKs implementation
    const { validateInputNumber, validateInputText } = useValidate()

    const uri = import.meta.env.VITE_API_URL
    const { postData } = useFetch(`${uri}/candidates`)

    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()   
        setCandidate([registerCandidate, nameComplete, emailCandidate, telephoneCandidate, nameResponsible, cellphoneResponsible])
        navigate('/')
    }

    const onChangeRegisterCandidate = (input)=>{
        const update = validateInputNumber(input)
        setRegisterCandidate(update)
    }

    const onChangeInputTelephoneCandidate = (input)=>{

        let update = validateInputNumber(input)
        setTelephoneCandidate(update)
        if (input.length === 11){
            update = useMaskPhoneNumber(update)
            setTelephoneCandidate(update)
        }
    }

    const onChangeInputPhoneNumberResponsable = (input)=>{
        
        let update = validateInputNumber(input)
        setcellphoneResponsible(update)
        if (input.length === 11){
            update = useMaskPhoneNumber(update)
            setcellphoneResponsible(update)
        }
    }


    const onChangeInputsName = (input)=> {
        const textInput = input.value
        const update = validateInputText(textInput)
        if (input.id === 'name-candidate'){
            setNameComplete(update)
        } else if (input.id === 'name-reponsible'){
            setNameResponsible(update)
        }
    }


    useEffect(()=>{
        useTransformArrayInObject(candidate, postData)
    }, [candidate])

    return (
        <Container>
            <h2>Sign Up</h2>
            <FormStyled onSubmit={handleSubmit}>
                <label>
                    <span>Matricula</span>
                    <input
                        type="text" 
                        placeholder="Ex: 001234"
                        value={registerCandidate}
                        onChange={(e)=>{onChangeRegisterCandidate(e.target.value)}}
                        maxLength={6}
                        // required
                        />
                </label>
                <label>
                    <span>Nome Completo</span>
                    <input
                        id='name-candidate'
                        type="text"
                        placeholder="Ex: José da Costa Filho" 
                        value={nameComplete}
                        onChange={(e)=>{onChangeInputsName(e.target)}}
                        required
                        />
                </label>
                <label>
                    <span>E-mail</span>
                    <input
                        type="email"
                        placeholder="Ex: primeironome@email.com"
                        value={emailCandidate}
                        onChange={(e)=>{setEmailCandidate(e.target.value)}}
                        required
                        />
                </label>
                <label>
                    <span>Celular de Candidato</span>
                    <input
                        type="text"
                        placeholder="(xx) 99999-0000"
                        value={telephoneCandidate}
                        maxLength={15}
                        onChange={(e)=>{onChangeInputTelephoneCandidate(e.target.value)}}
                        required
                        />
                </label>
                <label>
                    <span>Nome do Responsável</span>
                    <input
                        id='name-reponsible'
                        type="text"
                        placeholder="Ex: José da Costa Filho"
                        value={nameResponsible}
                        onChange={(e)=>{onChangeInputsName(e.target)}}
                        required
                        />
                </label>
                <label>
                    <span>Celular do Responsável</span>
                    <input
                        type="text"
                        placeholder="(xx) 99999-0000"
                        value={cellphoneResponsible}
                        maxLength={15}
                        onChange={(e)=>{onChangeInputPhoneNumberResponsable(e.target.value)}}
                        required
                        />
                </label>
                <Button style='signup' text="Candidatar-se" />
            </FormStyled>
        </Container>
    )
}