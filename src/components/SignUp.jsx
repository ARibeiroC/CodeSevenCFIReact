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
    const [keys, setKeys] = useState([])

    const [registerCandidate, setRegisterCandidate] = useState('')
    const [nameComplete, setNameComplete] = useState('')
    const [emailCandidate, setEmailCandidate] = useState('')
    const [telephoneCandidate, setTelephoneCandidate] = useState('')
    const [nameResponsible, setNameResponsible] = useState('')
    const [cellphoneResponsible, setcellphoneResponsible] = useState('')

    // HOOKs implementation
    const { validateInputNumber, validateInputText } = useValidate()

    const uri = import.meta.env.VITE_API_URL
    const { postData, loading } = useFetch(`${uri}/candidates`)

    const navigate = useNavigate()
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        const inputs = Array.from(e.target)
        let inputValue = []
        let inputKeys = []
        inputs.forEach((item)=>{
            if (item.name !== ""){
                inputValue.push(item.value)
                inputKeys.push(item.name)
            }
        })
        setCandidate(inputValue)
        setKeys(inputKeys)
        // setRegisterCandidate('')
        // setNameComplete('')
        // setEmailCandidate('')
        // setTelephoneCandidate('')
        // setNameResponsible('')
        // setcellphoneResponsible('')
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

    const candidateObject = useTransformArrayInObject(candidate, keys)

    const isRegistred = false

    const redirectPage = ()=>{
        navigate('/ConfirmRegister')
    }


    useEffect(()=>{
        if (candidate[0]){
            postData(candidateObject, "POST")
            setTimeout(()=>{
                redirectPage()
            }, 1000)
        }
    }, [candidate])

    return (
        <Container>
            <h2>Sign Up</h2>
            <FormStyled onSubmit={handleSubmit}>
                {/* <label>
                    <span>Matricula</span>
                </label> */}
                <input
                    name="registerCandidate"
                    type="text" 
                    placeholder="Matricula"
                    value={registerCandidate}
                    onChange={(e)=>{onChangeRegisterCandidate(e.target.value)}}
                    maxLength={6}
                    required
                />
                {/* <label>
                    <span>Nome Completo</span>
                </label> */}
                <input
                    name="nameComplete"
                    id='name-candidate'
                    type="text"
                    placeholder="Nome Completo" 
                    value={nameComplete}
                    onChange={(e)=>{onChangeInputsName(e.target)}}
                    required
                />
                {/* <label>
                    <span>E-mail</span>
                </label> */}
                <input
                    name="emailCandidate"
                    type="email"
                    placeholder="E-Mail"
                    value={emailCandidate}
                    onChange={(e)=>{setEmailCandidate(e.target.value)}}
                    required
                />
                {/* <label>
                    <span>Celular de Candidato</span>
                </label> */}
                <input
                    name="telephoneCandidate"
                    type="text"
                    placeholder="Telefone"
                    value={telephoneCandidate}
                    maxLength={15}
                    minLength={11}
                    onChange={(e)=>{onChangeInputTelephoneCandidate(e.target.value)}}
                    required
                />
                {/* <label>
                    <span>Nome do Responsável</span>
                </label> */}
                <input
                    name="nameResponsible"
                    id='name-reponsible'
                    type="text"
                    placeholder="Nome completo do responsável"
                    value={nameResponsible}
                    onChange={(e)=>{onChangeInputsName(e.target)}}
                    required
                />
                {/* <label>
                    <span>Celular do Responsável</span>
                </label> */}
                <input
                    name="cellphoneResponsible"
                    type="text"
                    placeholder="Telefone do responsável"
                    value={cellphoneResponsible}
                    maxLength={15}
                    minLength={11}
                    onChange={(e)=>{onChangeInputPhoneNumberResponsable(e.target.value)}}
                    required
                />
                {loading ? (
                    <Button wait={true} />
                ) : (
                    <Button text={"Candidatar-se"} />
                )}
            </FormStyled>
        </Container>
    )
}