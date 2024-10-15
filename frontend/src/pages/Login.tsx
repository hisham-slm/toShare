import LoginComponent from "../components/LoginComponent";
import NavBarComponent from "../components/Nav";


function LoginPage() {

    return (
        <>
            <NavBarComponent />
            <div className="container">
                <LoginComponent />
            </div>
        </>
    )
}

export default LoginPage