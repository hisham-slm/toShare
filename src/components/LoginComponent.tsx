import React, { useState } from "react"

function LoginComponent() {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //handle the form submission here

        console.log(username, password);
        setErrorMessage('');
    }

    return (
        <>
            <div className="container">
                <h3>Login</h3>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Email" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <button id="submit-button" type="submit">Login</button>
                </form>
            </div>
        </>
    )
}

export default LoginComponent