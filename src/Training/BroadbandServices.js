import React from 'react';
import FreshFibreTraining from '../Graphic/ff111.jpg';

const BroadbandServices = () => {
  return (
    <div className="energy-services-page">
      <h1 className='training-title'>Broadband Services</h1>
               <div className="training-grid">
           <div className="training-item">
                 <a href="https://drive.google.com/file/d/1OVuy5pEwC_qMooxgyqPGyZRoUIMhvznU/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                     <img src={FreshFibreTraining} alt="Training PowerPoint 1" className="training-thumbnail" />
                 </a>
                <p className="training-description">Advisor Training</p>
             </div>
        </div>
    </div>
  );
}

export default BroadbandServices
