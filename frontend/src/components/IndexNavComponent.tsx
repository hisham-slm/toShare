import '../styles/Nav.css'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

import mainLogo from '../assets/logo.png'
import { useState } from 'react'

function NavBarComponent() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }

    function renderIcon(isOpen: boolean){
        if(isOpen){
            return <IoClose />
        } else {
            return <FaBars></FaBars>
        }
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
                    <a href="/login">Login</a>
                    <a href="/signup">Sign Up</a>
                </div>
                <div className="icon" onClick={toggleMenu}>
                    {renderIcon(isOpen)}
                </div>
            </div >
            
        </>
    )
}

export default NavBarComponent