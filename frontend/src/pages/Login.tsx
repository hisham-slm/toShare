import LoginComponent from "../components/LoginComponent";
import NavBarComponent from "../components/IndexNavComponent";


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