import React, { useContext } from 'react';
import { UserContext } from './UserContext'; // Import UserContext
import { Link } from 'react-router-dom';
import './Navbar.css';
import DWMLogo from './Logo/DWM_logo_HD.png'; // Import the logo

const Navbar = () => {
    const { user, setUser } = useContext(UserContext); // Get user and setUser from context

    const handleLogout = () => {
        setUser(null); // Clear the user state (log out)
        localStorage.removeItem('user'); // Remove user from local storage if you're using it
        window.location.href = 'http://thedwm.co.uk/'; // Redirect to the login page
    };
    

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={DWMLogo} alt="Company Logo" className="navbar-logo" /> {/* Company logo */}
                <div className="navbar-menu">
                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                    {/* Conditionally render the AddAccount link only for 'admin' */}
                    {user === 'admin' && (
                        <Link to="/addaccount" className="nav-link">AddAccount</Link>
                    )}
                </div>
            </div>
            <div className="navbar-right">
                {user ? (
                    <>
                        <span>Hello, {user}!</span>
                        <button onClick={handleLogout} className="logout-button">
                            Logout
                        </button>
                    </>
                ) : (
                    <span>Hello!</span>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
