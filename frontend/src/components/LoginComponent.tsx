import React, { useState } from "react"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import '../styles/authenticate.css'

function LoginComponent() {
    const navigate = useNavigate()
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const apiURL: string = import.meta.env.VITE_API_URL

    interface Data {
        username: string,
        password: string
    }

    const formData: Data = {
        'username': username,
        "password": password
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch(`${apiURL}authentication/login`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                credentials: 'include',
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                console.log(response)
                toast.success('Login Successfull!')
                navigate('/projects')
            } else {
                const dataRecieved = await response.json()
                const message = dataRecieved.message
                toast.error(`${message}`)
            }

        } catch (error) {
            toast.error(`${error}`)
        }

    }

    return (
        <div className="blur">
            <div className="container">
                <h1 id="header">Login</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <input className="input-field" placeholder="Email" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input className="input-field" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button id="submit-button" type="submit">Login</button>
                </form>
                <a href="/signup" id="anchor-signup">Don't have an account yet?</a>
            </div>
        </div>
    )
}

export default LoginComponent