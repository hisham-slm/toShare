import React, { useState } from "react";

function SignUpComponent() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [username, setUserame] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const emailValidation = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailRegex.test(email)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!emailValidation(email)) {
            console.log('email is not valid please check email');
            setErrorMessage('Please enter a valid Email');
        } else if (password !== confirmPassword) {
            console.log('Passwords dont matach')
            setErrorMessage("Passwords doesn't match!")
        }
        else {
            //handle the form submission here

            console.log(`submission success ${username}, ${password}, ${email}`)
            setErrorMessage('')
        }
    }
    return (
        <>
            <div className="container">
                <h3>Sign Up</h3>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input placeholder="Username" type="text" value={username} onChange={(e) => setUserame(e.target.value)} required />
                    <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <input placeholder="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <button id="submit-button" type="submit">Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default SignUpComponent