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
        </div>
    )
}