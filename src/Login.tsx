import React, { useState } from "react";
import './login.css';

interface LoginProps {
    onLogin: (isVerified: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [inputPassword, updatePassword] = useState<string>("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const isVerified = inputPassword === import.meta.env.VITE_PASSWORD;
        onLogin(isVerified);
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={inputPassword}
                    onChange={(e) => updatePassword(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;