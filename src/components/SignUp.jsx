import '../css/Sign.css'
import { Button } from "./Button"

// HOOKs
import { useNavigate } from 'react-router-dom'
import { useMaskPhoneNumber } from "../hooks/useMasks"
import { useFetch } from "../hooks/useFetch"
import { useValidate } from '../hooks/useValidate'
import { useEffect, useState } from "react"
import { useTransformArrayInObject } from "../hooks/useTransformArrayInObject"

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
        navigate('/CodeSevenCFIReact/ConfirmRegister')
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
        <div className="sign">
            <h2 className="title">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label className="labels">
                    <span className="spans">Matricula</span>
                    <input
                        className="inputs"
                        type="text" 
                        placeholder="Ex: 001234"
                        value={registerCandidate}
                        onChange={(e)=>{onChangeRegisterCandidate(e.target.value)}}
                        maxLength={6}
                        // required
                        />
                </label>
                <label className="labels">
                    <span className="spans">Nome Completo</span>
                    <input
                        className="inputs"
                        id='name-candidate'
                        type="text"
                        placeholder="Ex: José da Costa Filho" 
                        value={nameComplete}
                        onChange={(e)=>{onChangeInputsName(e.target)}}
                        required
                        />
                </label>
                <label className="labels">
                    <span className="spans">E-mail</span>
                    <input
                        className="inputs"
                        type="email"
                        placeholder="Ex: primeironome@email.com"
                        value={emailCandidate}
                        onChange={(e)=>{setEmailCandidate(e.target.value)}}
                        required
                        />
                </label>
                <label className="labels">
                    <span className="spans">Celular de Candidato</span>
                    <input
                        className="inputs"
                        type="text"
                        placeholder="(xx) 99999-0000"
                        value={telephoneCandidate}
                        maxLength={15}
                        onChange={(e)=>{onChangeInputTelephoneCandidate(e.target.value)}}
                        required
                        />
                </label>
                <label className="labels">
                    <span className="spans">Nome do Responsável</span>
                    <input
                        className="inputs"
                        id='name-reponsible'
                        type="text"
                        placeholder="Ex: José da Costa Filho"
                        value={nameResponsible}
                        onChange={(e)=>{onChangeInputsName(e.target)}}
                        required
                        />
                </label>
                <label className="labels">
                    <span className="spans">Celular do Responsável</span>
                    <input
                        className="inputs"
                        type="text"
                        placeholder="(xx) 99999-0000"
                        value={cellphoneResponsible}
                        maxLength={15}
                        onChange={(e)=>{onChangeInputPhoneNumberResponsable(e.target.value)}}
                        required
                        />
                </label>
                <Button style='signup' text="Candidatar-se" />
            </form>
        </div>
    )
}