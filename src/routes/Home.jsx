import { useState } from 'react'
import '../css/Home.css'

export function Home(){

    const [user, setUser] = useState(localStorage.getItem('user'))

    return (
        <div className="home">
            <h1>Home Page</h1>
            <h3>Seja Bem Vindo <span>{user}</span></h3>
        </div>
    )
}