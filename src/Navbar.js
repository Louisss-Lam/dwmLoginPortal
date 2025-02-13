import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import { Link } from 'react-router-dom';
import './Navbar.css';
import DWMLogo from './Logo/DWM_logo_HD.png';

const Navbar = () => {
    const { user, setUser } = useContext(UserContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');
        window.location.href = 'https://thedwm.co.uk/';
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="navbar">
            {/* Desktop Version */}
            <div className="navbar-desktop">
                <div className="navbar-left">
                    <img src={DWMLogo} alt="Company Logo" className="navbar-logo" />
                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                    {user === 'admin' && (
                        <Link to="/addaccount" className="nav-link">AddAccount</Link>
                    )}
                </div>
                <div className="navbar-right">
                    <span>Hello, {user}!</span>
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                </div>
            </div>

            {/* Mobile Version */}
            <div className="navbar-mobile">
                <div className="navbar-top">
                    <img src={DWMLogo} alt="Company Logo" className="navbar-logo" />
                    <div className="navbar-toggle">
                        <button onClick={toggleMenu} className="menu-toggle">☰</button>
                    </div>
                </div>

                {/* Slide-In Menu */}
                <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
                    <button className="close-button" onClick={toggleMenu}>×</button>
                    <h2>Hello, {user}</h2>
                    <button onClick={handleLogout} className="logout-button-slide">Logout</button>
                    <Link to="/dashboard" className="sidebar-link" onClick={toggleMenu}>Dashboard</Link>
                    {user === 'admin' && (
                        <Link to="/addaccount" className="sidebar-link" onClick={toggleMenu}>AddAccount</Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;




