import { useEffect } from 'react'
import '../css/ErrorPage.css'
import { useNavigate } from 'react-router-dom'

export function ErrorPage(){
    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/')
        },6000)
    })
    return (
        <div className="error-page">
            <h1>Ops!!! Ocorrou um problema.</h1>
            <h2>Infelizmente não foi possivel acesssar a página</h2>
            <p>Estamos redirecionando você para nossa página principal</p>
        </div>
    )
}