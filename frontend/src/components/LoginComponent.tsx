import React, { useState } from "react"

import '../styles/authenticate.css'

function LoginComponent() {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [loginError, setLoginError] = useState<string>('')

    const apiURL: string = import.meta.env.VITE_API_URL

    interface Data{
        username:string,
        password:string
    }

    const formData: Data = {
        'username' : username,
        "password" : password
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch(`${apiURL}authentication/login`, {
                method : 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })

            if(response.ok){
                const dataRecieved:object = await response.json()

                console.log(dataRecieved)
                setErrorMessage('')
                setLoginError('')
            }

        } catch (error) {
            setLoginError(`${error}`)
        }

    }

    return (
        <div className="blur">
            <div className="container">
                <h1 id="header">Login</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <input className="input-field" placeholder="Email" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input className="input-field" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    {errorMessage && <p className="error">{errorMessage}</p>}
                    <button id="submit-button" type="submit">Login</button>
                </form>
                <p>{loginError}</p>
                <a href="/signup" id="anchor-signup">Don't have an account yet?</a>
            </div>
        </div>
    )
}

export default LoginComponent