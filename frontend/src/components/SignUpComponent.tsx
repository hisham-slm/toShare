import React, { useState } from "react";

import '../styles/authenticate.css'

function SignUpComponent() {
    const apiURL: any = import.meta.env.VITE_API_URL

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const emailValidation = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailRegex.test(email)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!emailValidation(email)) {
            console.log('email is not valid please check email');
            setErrorMessage('Please enter a valid Email');
        } else if (password !== confirmPassword) {
            console.log('Passwords dont matach')
            setErrorMessage("Passwords doesn't match!")
        }
        else {
            interface Data {
                username: string,
                email: string,
                password: string
            }

            const formData: Data = {
                'username': username,
                'email': email,
                'password': password
            }
            try {
                const response = await fetch(apiURL + 'authentication/signup', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                })
                setErrorMessage('')
                if(response.ok){
                    const dataRecieved:object = await response.json()
                    console.log(dataRecieved)
                } 
            } catch(error) {
            setErrorMessage(`${error}`)
            }
        }
    }
    return (
        <div className="blur">
            <div className="container">
                <h1 id="title" >Sign Up</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <input className="input-field" placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input className="input-field" placeholder="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input className="input-field" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <input className="input-field" placeholder="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <button id="submit-button" type="submit">Sign Up</button>
                </form>
                <a id="anchor-signup" href="/login">Already have an account?</a>
            </div>
        </div>
    )
}

export default SignUpComponent