import React from 'react';
import Training1 from '../Graphic/sp2222.jpg';
import Training2 from '../Graphic/sp3333.jpg';
import Training3 from '../Graphic/DirectDebt.jpg';
import PSR from '../Graphic/PsrTraining.jpg';
import warmHome from '../Graphic/theWarmHome.jpg';
import './EnergyServices.css';

const EnergyServices = () => {
    return (
        <div className="energy-services-page">
          <h1 className='training-title'>Energy Services</h1>
                   <div className="training-grid">
               <div className="training-item">
                     <a href="https://yourdwm.co.uk/wp-content/uploads/2025/02/Scottish-Power-Sales-training.-Picth-only.pdf" target="_blank" rel="noopener noreferrer">
                         <img src={Training1} alt="Training PowerPoint 1" className="training-thumbnail" />
                     </a>
                    <p className="training-description">Sales Pitch Training</p>
                 </div>

                <div className="training-item">
                    <a href="https://yourdwm.co.uk/wp-content/uploads/2025/02/SP-ESMS-training-18.07.24.pdf" target="_blank" rel="noopener noreferrer">
                         <img src={Training2} alt="Training PowerPoint 2" className="training-thumbnail" />
                     </a>
                    <p className="training-description">Getting Appliance into your pitch</p>
                </div>

                <div className="training-item">
                    <a href="https://yourdwm.co.uk/wp-content/uploads/2025/02/DirectDebt-training.pdf" target="_blank" rel="noopener noreferrer">
                         <img src={Training3} alt="Training PowerPoint 2" className="training-thumbnail" />
                     </a>
                    <p className="training-description">Understanding Direct Debts</p>
                </div>

                <div className="training-item">
                    <a href="https://yourdwm.co.uk/wp-content/uploads/2025/02/DWM-PSR-brief.-PDF.pdf" target="_blank" rel="noopener noreferrer">
                         <img src={PSR} alt="PSR" className="training-thumbnail" />
                     </a>
                    <p className="training-description">PSR Training</p>
                </div>

                <div className="training-item">
                    <a href="https://yourdwm.co.uk/wp-content/uploads/2025/02/DWM-Warm-Home-Discount-brief-1.pdf" target="_blank" rel="noopener noreferrer">
                         <img src={warmHome} alt="warmHome" className="training-thumbnail" />
                     </a>
                    <p className="training-description">The Warm Home Discount</p>
                </div>
            </div>
        </div>
    );
}

export default EnergyServices;

