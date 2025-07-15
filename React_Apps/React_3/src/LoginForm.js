import React, { useState } from 'react';

function LoginForm() {
    const [form, setForm] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        alert(`Username: ${form.username}\nPassword: ${form.password}`);
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: '0 auto' }}>
            <h2>Login</h2>
            <div>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', marginBottom: 10 }}
                    />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', marginBottom: 10 }}
                    />
                </label>
            </div>
            <button type="submit" style={{ width: '100%' }}>Login</button>
        </form>
    );
}

export default LoginForm;