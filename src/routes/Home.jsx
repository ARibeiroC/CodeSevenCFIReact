// LIBS IMPORT
import { Outlet, useNavigate } from 'react-router-dom'

// STYLED COMPONENTS IMPORT
import { Container } from '../css/HomeCSS'

// COMPONENTS IMPORT
import { SideMenu } from '../components/SideMenu'


// HOOKS IMPORT
import { useAuthLoginConnected } from '../hooks/useAuthUserConnected'
import { useEffect, useState } from 'react'

export function Home(){
    // Hooks
    const localStorageUser = useAuthLoginConnected('home')
    const [user, setUser] = useState()
    useEffect(()=>{
        if(localStorageUser){
            setUser(localStorage.getItem('user'))
        }
    },[])
    

    return (
        <Container>
            <SideMenu />
            <Outlet />
        </Container>
    )
}