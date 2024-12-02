import { useEffect } from 'react'
import '../css/ErrorPage.css'
import { useNavigate } from 'react-router-dom'

export function ErrorPage(){
<<<<<<< HEAD
    // const navigate = useNavigate()
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         navigate('/CodeSevenCFIReact')
    //     },6000)
    // })
=======
    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/')
        },6000)
    })
>>>>>>> b424911d42b8dd5590185918a8055ee84afc34fb
    return (
        <div className="error-page">
            <h1>Ops!!! Ocorrou um problema.</h1>
            <h2>Infelizmente não foi possivel acesssar a página</h2>
            <p>Estamos redirecionando você para nossa página principal</p>
        </div>
    )
}