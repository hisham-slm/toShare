import './Nav.css'

function NavBar() {
    return (
        <div className="nav-bar">
            <div className="left-side">
                <img src="src\assets\logo.png" alt="logo.png" />
                <h3 className='title'>To Share</h3>
            </div>
            <div className="right-side">
                <a style={{ color : "rgb(173, 212, 246)"}} href="">Home</a>
                <a href="">New Project</a>
                <a href="">Login</a>
                <a href="">Sign Up</a>
            </div>
        </div >
    )
}

export default NavBar