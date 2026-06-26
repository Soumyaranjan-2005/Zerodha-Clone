import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { API_BASE_URL } from '../../config';

function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const togglePassword = () => {
        setShowPassword((prevVisible) => !prevVisible);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`${API_BASE_URL}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Signup failed');
            }

            if (data.token) {
                window.localStorage.setItem('authToken', data.token);
            }

            alert('Signup successful. Redirecting to login...');
            window.location.href = '/Login';
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="signup-page">
            <div className="signup-card">
                <h1>Sign Up</h1>
                <p>Create your account by filling in the information below.</p>
                <form onSubmit={handleSubmit} className="signup-form">
                    <label>
                        Name
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                        />
                    </label>

                    <label>
                        Phone Number
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            required
                        />
                    </label>

                    <label>
                        Email ID
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </label>

                    <label className="password-label">
                        Password
                        <div className="password-input-row">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Create a password"
                                required
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={togglePassword}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </label>

                    <button type="submit" className="signup-button">
                        Sign Up
                    </button>
                    <p className="form-footer">
                        Already have an account? <Link to="/Login">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default SignUp;