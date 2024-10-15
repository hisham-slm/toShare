import SignUpComponent from "../components/SignUpComponent";
import NavBarComponent from "../components/Nav";


function SignUpPage() {

    return (
        <>
            <NavBarComponent />
            <div className="container">
                <SignUpComponent />
            </div>
        </>
    )
}

export default SignUpPage