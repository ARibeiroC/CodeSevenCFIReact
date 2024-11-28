import { useEffect, useState } from 'react'
import '../css/Home.css'
import { Header } from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { useAuthLoginConnected } from '../hooks/useAuthUserConnected'

export function Home(){
    // Hooks
    const navigate = useNavigate()
    const localStorageUser = useAuthLoginConnected('home')
    const [user, setUser] = useState()
    useEffect(()=>{
        if(localStorageUser){
            setUser(localStorage.getItem('user'))
        }
    },[])
    

    return (
        <div className="home">
            <Header></Header>
            <div className="warning">
                <p>Projeto em desenvolvimento</p>
            </div>
            <div className="container">
                <h1>Obrigado por acessar nosso sistema</h1>
                <h4>Estou muito animado com o progresso do projeto, espero que você também tenha gostado do resultado até agora.</h4>
                <p>Para conhecer mais a fundo, considere acessar nosso repositório no github</p>
                <a href="https://github.com/ARibeiroC/CodeSevenCFIReact">github.com/ARibeiroC/CodeSevenCFIReact</a>
            </div>
        </div>
    )
}