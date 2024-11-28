import { useState } from 'react'
import '../css/Home.css'
import { Header } from '../components/Header'

export function Home(){

    const [user, setUser] = useState(localStorage.getItem('user'))

    return (
        <div className="home">
            <Header></Header>
        </div>
    )
}