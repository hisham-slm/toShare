import SignUpComponent from "../components/SignUpComponent";
import NavBarComponent from "../components/IndexNavComponent";


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