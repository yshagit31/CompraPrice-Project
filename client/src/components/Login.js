import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Sign In</h1>
                <p className="login-subtitle">Log in to CompraPrice to start comparing prices!</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Log In</button>
                </form>
                <p className="login-footer">
                    Don't have an account? <a href="/register" className="register-link">Register</a>
                </p>
            </div>
        </div>
    );
}

export default Login;