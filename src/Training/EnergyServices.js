import React from 'react';
import Training1 from '../Graphic/sp2222.jpg';
import Training2 from '../Graphic/sp3333.jpg';
import Training3 from '../Graphic/DirectDebt.jpg';
import './EnergyServices.css';

const EnergyServices = () => {
    return (
        <div className="energy-services-page">
          <h1 className='training-title'>Energy Services</h1>
                   <div className="training-grid">
               <div className="training-item">
                     <a href="https://drive.google.com/file/d/1xkuuP-4TZyRUlRmDvmY8m9y9ri7xmGau/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                         <img src={Training1} alt="Training PowerPoint 1" className="training-thumbnail" />
                     </a>
                    <p className="training-description">Sales Pitch Training</p>
                 </div>

                <div className="training-item">
                    <a href="https://drive.google.com/file/d/1rxC6XyILcXJtcfjevfjV6c2PLXsXVWqw/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                         <img src={Training2} alt="Training PowerPoint 2" className="training-thumbnail" />
                     </a>
                    <p className="training-description">Getting Appliance into your pitch</p>
                </div>

                <div className="training-item">
                    <a href="https://drive.google.com/file/d/1B3JwH09s_J9S9aTLVUTgoF_k6sTmXvnP/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                         <img src={Training3} alt="Training PowerPoint 2" className="training-thumbnail" />
                     </a>
                    <p className="training-description">Understanding Direct Debts</p>
                </div>
            </div>
        </div>
    );
}

export default EnergyServices;

