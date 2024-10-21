import '../styles/Nav.css'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import Cookies from 'js-cookie'

import mainLogo from '../assets/logo.png'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


function LoggedInNav() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    function renderIcon(isOpen: boolean) {
        if (isOpen) {
            return <IoClose />
        } else {
            return <FaBars></FaBars>
        }
    }

    const RemoveToken = () => {
        Cookies.remove('access_token');
        toast.success("Logged Out")
        navigate('/')
    }

    return (
        <>
            <div className="nav-bar">
                <div className="left-side">
                    <img src={mainLogo} alt="logo.png" />
                    <h3 className='title'>To Share</h3>
                </div>
                <div className={isOpen ? 'right-side active' : 'right-side'}>
                    <a style={{ color: "#feb47b" }} href="/">Home</a>
                    <a href="">New Project</a>
                    <a href="/projects">My Projects</a>
                    <a onClick={RemoveToken}>Logout</a>
                </div>
                <div className="icon" onClick={toggleMenu}>
                    {renderIcon(isOpen)}
                </div>
            </div >

        </>
    )
}

export default LoggedInNav