import { useNavigate } from 'react-router-dom'
import '../css/Header.css'
import {Button} from './Button'
export function Header(){
    const navigate = useNavigate()
    const handleLogout = (e)=>{
        localStorage.clear()
        navigate('/CodeSevenCFIReact/')
    }
    return (
        <div className="header">
            <header>
                <div className="social-media">
                    <a href='#'>HOME</a>
                    <a href='#'>PROJETO CFI</a>
                    <a href='#'>REALIZAR PROVA</a>
                </div>
                <div className="menu-control">
                    <nav>
                        <div className="menu-control">
                            <img src="#" alt="Perfil img" />
                        </div>
                    </nav>
                    <div className="btn-control">
                        <Button style="btn" text="Logout" action={(e)=> handleLogout(e.target)} />
                    </div>
                </div>
            </header>
        </div>
    )
}