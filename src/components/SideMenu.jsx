// REACT ICONS IMPORT
import { FaHouse, FaGear, FaFileLines, FaFilePen  } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import { BsCalendar3EventFill } from "react-icons/bs";
import { TbLogout2 } from "react-icons/tb";


// REACT ROUTER DOM IMPORT
import { useNavigate, NavLink } from 'react-router-dom'


// HOOKS IMPORT
import { useUserData } from "../hooks/useUserData";
import { useRef } from "react";


// STYLED COMPONENT IMPORT
import { AreaControl, Container, Dialog, NavMenu } from "../css/SideMenuCSS";


export function SideMenu(){
    const modal = useRef()
    const toggleMenu = useRef()
    const checkMenu = useRef()
    const btnCloseModal = useRef()
    
    const handleLogout = ()=>{
        localStorage.clear()
    }

    function handleShowModal(){
        modal.current.showModal()
    }

    function closeModal(){
        modal.current.close()
    }
    
    function handleShowMenu(){
        if (checkMenu.current.checked){
            toggleMenu.current.classList.add('toggle-menu')
        } else{
            toggleMenu.current.classList.remove('toggle-menu')
        }
    }

    const [user, id] = useUserData()

    function disableCheckboxForClickItemMenu(){
        checkMenu.current.checked = false
        handleShowMenu()
    }

    return (
        <Container>
            <Dialog ref={modal}>
                <div className="btnClose">
                    <button ref={btnCloseModal} onClick={closeModal} className="btnClose">X</button>
                </div>
                <h2>Perfil do Usuário</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid blanditiis, sunt sequi fuga at perspiciatis? Eum culpa saepe praesentium. Amet voluptate perferendis facere, inventore sint a tempore iure laborum aut.</p>
            </Dialog>
            <AreaControl>
                <div className="image-user-profile">
                    <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="Perfil img" onClick={handleShowModal}/>
                </div>
                <p>{user}</p>
                <label onClick={handleShowMenu}>
                    <input type="checkbox" name="" ref={checkMenu} />
                    <BsGripVertical />
                </label>
            </AreaControl>
            <NavMenu ref={toggleMenu}>
                <ul >
                    <li className="item-menu">
                        <NavLink to={`/area-do-candidato/${id}`} onClick={()=>disableCheckboxForClickItemMenu()}>
                            HomePage<FaHouse className="icon" />
                        </NavLink>
                    </li>
                    <li className="item-menu">
                        <NavLink to={`/area-do-candidato/${id}/project-cfi`} onClick={()=>disableCheckboxForClickItemMenu()}>
                            Projeto CFI<FaFileLines className="icon" />
                        </NavLink>
                    </li>
                    <li className="item-menu">
                        <NavLink to={`/area-do-candidato/${id}/events`} onClick={()=>disableCheckboxForClickItemMenu()}>
                            Eventos<BsCalendar3EventFill className="icon" />
                        </NavLink>
                    </li>
                    <li className="item-menu">
                        <NavLink to={`/area-do-candidato/${id}/test`} onClick={()=>disableCheckboxForClickItemMenu()}>
                            Prova<FaFilePen className="icon" />
                        </NavLink>
                    </li>
                    <li className="item-menu">
                        <NavLink to="/" onClick={handleLogout}>
                            Logout<TbLogout2 className="icon" />
                        </NavLink>
                    </li>
                </ul>
            </NavMenu>
        </Container>
    )
}