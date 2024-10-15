import React, { useState, useContext } from 'react';
import axios from 'axios';
import './Login.css'; 
import DWMLogo from './Logo/DWM_logo_HD.png';
import { UserContext } from './UserContext'; // Import UserContext
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Login({ setIsAuthenticated }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { setUser } = useContext(UserContext); // Get setUser function from context
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://thedwm.co.uk/api.php', { 
                username: username,
                password: password
            });
            if (response.data.success) {
                setIsAuthenticated(true);
                setUser(username); // Set the username in context
                navigate('/dashboard'); // Redirect to dashboard
            } else {
                setMessage('Incorrect username or password');
            }
        } catch (error) {
            setMessage('Error connecting to the server');
        }
    };

    return (
        <div className="container">
            <img src={DWMLogo} alt="Company Logo" className="logo" />
            <form onSubmit={handleLogin} className="form">
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Username" 
                    className="input"
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    className="input"
                />
                <button type="submit" className="button">Login</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default Login;


// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import './Login.css'; 
// import DWMLogo from './Logo/DWM_logo_HD.png';
// import { UserContext } from './UserContext'; // Import UserContext
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// function Login({ setIsAuthenticated }) {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const { setUser } = useContext(UserContext); // Get setUser function from context
//     const navigate = useNavigate(); // Initialize useNavigate

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post('http://localhost:5000/api/login', { // Ensure the correct API URL
//                 username: username,
//                 password: password
//             });
//             if (response.data.success) { // Assuming your API returns { success: true } on successful login
//                 setIsAuthenticated(true);
//                 setUser(username); // Set the username in context
//                 navigate('/dashboard'); // Redirect to dashboard
//             } else {
//                 setMessage('Incorrect username or password');
//             }
//         } catch (error) {
//             setMessage('Error connecting to the server');
//         }
//     };

//     return (
//         <div className="container">
//             <img src={DWMLogo} alt="Company Logo" className="logo" />
//             <form onSubmit={handleLogin} className="form">
//                 <input 
//                     type="text" 
//                     value={username} 
//                     onChange={(e) => setUsername(e.target.value)} 
//                     placeholder="Username" 
//                     className="input"
//                     required // Ensure input is required
//                 />
//                 <input 
//                     type="password" 
//                     value={password} 
//                     onChange={(e) => setPassword(e.target.value)} 
//                     placeholder="Password" 
//                     className="input"
//                     required // Ensure input is required
//                 />
//                 <button type="submit" className="button">Login</button>
//             </form>
//             {message && <p className="message">{message}</p>}
//         </div>
//     );
// }

// export default Login;
