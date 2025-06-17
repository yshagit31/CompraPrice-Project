import React, { useState } from 'react';
import './Registration.css';

function Registration() {
    const [form, setForm] = useState({
        username: '',
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
        <div className="registration-container">
            <div className="registration-card">
                <h1 className="registration-title">Create Your Account</h1>
                <p className="registration-subtitle">Join CompraPrice to compare prices and save big!</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={form.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
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
                    <button type="submit" className="registration-button">Register</button>
                </form>
                <p className="registration-footer">
                    Already have an account? <a href="/login" className="login-link">Log in</a>
                </p>
            </div>
        </div>
    );
}

export default Registration;