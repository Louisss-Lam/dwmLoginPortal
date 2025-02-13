import React, { useState } from 'react';
import axios from 'axios';
import './AddAccount.css'; // Import the scoped CSS

const AddAccount = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // New state for confirm password
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage('Passwords do not match.');
            return;
        }

        try {
            const response = await axios.post('https://thedwm.co.uk/create-user.php', {
                username,
                password,
            });

            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error creating user. Please try again.');
        }
    };

    return (
        <div className="add-account">
            <h2>Add New Account</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        Show Password
                    </label>
                </div>
                <button type="submit">Create Account</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AddAccount;
