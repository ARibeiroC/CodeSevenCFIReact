// REACT ICONS IMPORT
import { FaHouse, FaGear, FaFileLines, FaFilePen  } from "react-icons/fa6";
import { BsCalendar3EventFill } from "react-icons/bs";
import { TbLogout2 } from "react-icons/tb";


// REACT ROUTER DOM IMPORT
import { useNavigate, NavLink } from 'react-router-dom'


// HOOKS IMPORT
import { useUserName } from "../hooks/useUserName";
import { useRef } from "react";


// STYLED COMPONENT IMPORT
import { AreaControl, Container, Dialog, NavMenu } from "../css/SideMenuCSS";


export function SideMenu(){
    const navigate = useNavigate()
    const modal = useRef()
    const btnCloseModal = useRef()
    
    const handleLogout = ()=>{
        localStorage.clear()
    }

    function handleShowModal(){
        console.log(modal.current)
        modal.current.showModal()
    }

    function closeModal(){
        modal.current.close()
    }

    const user = useUserName()

    return (
        <Container>
            <Dialog ref={modal}>
                <button ref={btnCloseModal} onClick={closeModal} className="btnClose">X</button>
                <h2>Perfil do Usuário</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid blanditiis, sunt sequi fuga at perspiciatis? Eum culpa saepe praesentium. Amet voluptate perferendis facere, inventore sint a tempore iure laborum aut.</p>
            </Dialog>
            <AreaControl>
                <div className="image-user-profile">
                    <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="Perfil img" onClick={handleShowModal}/>
                </div>
                <p>{user}</p>
            </AreaControl>
            <NavMenu>
                <div className="item-menu">
                    <NavLink to="/area-do-candidato">HomePage<FaHouse /></NavLink>
                </div>
                <div className="item-menu">
                    <NavLink to="/area-do-candidato/project-cfi">Projeto CFI<FaFileLines/></NavLink>
                </div>
                <div className="item-menu">
                    <NavLink to="/area-do-candidato/events">Eventos<BsCalendar3EventFill/></NavLink>
                </div>
                <div className="item-menu">
                    <NavLink to="/area-do-candidato/test">Prova<FaFilePen /></NavLink>
                </div>
                <div className="item-menu">
                    <NavLink to="/area-do-candidato/test">Configurações<FaGear /></NavLink>
                </div>
                <div className="item-menu">
                    <NavLink to="/" onClick={handleLogout}>Logout<TbLogout2 /></NavLink>
                </div>
            </NavMenu>
        </Container>
    )
}