import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import '../styles/authenticate.css'

function SignUpComponent() {
    const navigate = useNavigate();
    const apiURL: any = import.meta.env.VITE_API_URL

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [responseMessage, setResponseMessage] = useState<string>('')

    const emailValidation = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailRegex.test(email)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!emailValidation(email)) {
            console.log('email is not valid please check email');
            toast.error('Please enter a valid Email')
        } else if (password !== confirmPassword) {
            toast.error("Passwords doesn't match!")
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


                if (response.ok) {
                    const dataRecieved = await response.json()
                    setResponseMessage(`${dataRecieved.message}`)
                    toast.success(`${responseMessage}`)
                    navigate('/login')
                } else {
                    const dataRecieved = await response.json()
                    toast.error(`${dataRecieved.message}`)

                }
            } catch (error) {
                toast.error(`${error}`)
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
                    <button id="submit-button" type="submit">Sign Up</button>
                </form>
                <a id="anchor-signup" href="/login">Already have an account?</a>
            </div>
        </div>
    )
}

export default SignUpComponent