// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Training from './Training'; 
import EnergyServices from './Training/EnergyServices';
import BroadbandServices from './Training/BroadbandServices';
import AddAccount from './AddAccount/AddAccount';
import Navbar from './Navbar';
import { UserProvider } from './UserContext'; // Import UserProvider

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <UserProvider>
            <Router>
                {isAuthenticated && <Navbar />} {/* Show the navbar only if authenticated */}
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            isAuthenticated ? <Navigate to="/dashboard" /> : <Login setIsAuthenticated={setIsAuthenticated} />
                        } 
                    />
                    <Route 
                        path="/dashboard" 
                        element={
                            isAuthenticated ? <Dashboard /> : <Navigate to="/" />
                        } 
                    />
                    <Route 
                        path="/training" 
                        element={
                            isAuthenticated ? <Training /> : <Navigate to="/" />
                        } 
                    />
                    <Route 
                        path="/training/energy-services" 
                        element={
                            isAuthenticated ? <EnergyServices /> : <Navigate to="/" />
                        } 
                    />
                    <Route 
                        path="/training/broadband-services" 
                        element={
                            isAuthenticated ? <BroadbandServices /> : <Navigate to="/" />
                        } 
                    />
                    <Route 
                        path="/addaccount" 
                        element={
                            isAuthenticated ? <AddAccount /> : <Navigate to="/" />
                        } 
                    />
                    <Route 
                        path="/sp-onboarding" 
                        element={
                            isAuthenticated ? <div>SP Onboarding Page</div> : <Navigate to="/" />
                        } 
                    />
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './Login';
// import Dashboard from './Dashboard';
// import Training from './Training'; // Import the new Training component
// import Navbar from './Navbar';
// import EnergyServices from './Training/EnergyServices';
// import BroadbandServices from './Training/BroadbandServices';
// import AddAccount from './AddAccount/AddAccount';
// import { UserProvider } from './UserContext';

// function App() {
//     return (
//         <UserProvider>
//             <Router>
//                 <Navbar />
//                 <Routes>
//                     <Route path="/" element={<Login />} />
//                     <Route path="/dashboard" element={<Dashboard />} />
//                     <Route path="/training" element={<Training />} /> {/* Use the Training component */}
//                     <Route path="/sp-onboarding" element={<div>SP Onboarding Page</div>} />
//                     <Route path="/training/energy-services" element={<EnergyServices />} />
//                     <Route path="/training/broadband-services" element={<BroadbandServices />} />
//                     <Route path="/addaccount" element={<AddAccount />} />
//                 </Routes>
//             </Router>
//         </UserProvider>
//     );
// }

// export default App;


