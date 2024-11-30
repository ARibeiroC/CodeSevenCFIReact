// LIBS IMPORT
import { Outlet, useNavigate } from 'react-router-dom'

// CSS IMPORT
import '../css/Home.css'

// COMPONENTS IMPORT
import { SideMenu } from '../components/SideMenu'


// HOOKS IMPORT
import { useAuthLoginConnected } from '../hooks/useAuthUserConnected'
import { useEffect, useState } from 'react'

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
            <SideMenu />
            <Outlet />
        </div>
    )
}