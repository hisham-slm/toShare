import '../styles/Nav.css'

import mainLogo from '../assets/logo.png'

function NavBarComponent() {
    return (
        <div className="nav-bar">
            <div className="left-side">
                <img src={mainLogo} alt="logo.png" />
                <h3 className='title'>To Share</h3>
            </div>
            <div className="right-side">
                <a style={{ color : "#feb47b"}} href="/">Home</a>
                <a href="">New Project</a>
                <a href="/login">Login</a>
                <a href="/signup">Sign Up</a>
            </div>
        </div >
    )
}

export default NavBarComponent