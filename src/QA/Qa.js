import React from 'react';
import './Qa.css';
import SP_QPP from '../Graphic/SalesInteraction.jpg';
import SP_training from '../Graphic/sp2222.jpg';
import T25 from '../Graphic/Tariff25.jpg';
import T24 from '../Graphic/Tariff24.jpg';
import EAC from '../Graphic/EAC.jpg';
import SalesDevice from '../Graphic/SalesDevice.jpg';
import SalesRecording from '../Graphic/SalesRecordingScorecard.jpg';
import KCB from '../Graphic/KCB.jpg';
import Face from '../Graphic/Face.jpg';
import Easy from '../Graphic/Easy_Compliance.jpg';
import Compliance from '../Graphic/compliance_update.jpg';
import Boiler from '../Graphic/Boiler_Care.jpg';
import Field from '../Graphic/Field_Safety.jpg';
import EasyCompliance from '../Graphic/Easy_Compliance_Incentive.jpg';
import TariffUpdate from '../Graphic/Tariff_update.jpg';
import AgentBrief from '../Graphic/Agent_Brief.jpg';
import PowerPlay from '../Graphic/Power_Play.jpg';
import AddressSearch from '../Graphic/Address_search.jpg';

const Qa = () => {
  return (
    <div className="energy-services-page">
          <h1 className='training-title'>QA</h1>
                   <div className="training-grid">
               <div className="training-item">
                     <a href="https://yourdwm.co.uk/wp-content/uploads/2025/03/Quality-Protection-Process.pdf" target="_blank" rel="noopener noreferrer">
                         <img src={SP_QPP} alt="Training PowerPoint 1" className="training-thumbnail" />
                     </a>
                    <p className="training-description">SP - Quality Protection Process</p>
                 </div>

                <div className="training-item">
                    <a href="https://yourdwm.co.uk/wp-content/uploads/2025/04/Scottish-Power-Sales-training.-02.04.25-Pitch.pdf" target="_blank" rel="noopener noreferrer">
                         <img src={SP_training} alt="Training PowerPoint 2" className="training-thumbnail" />
                     </a>
                    <p className="training-description">Scottish Power Sales Pitch training</p>
                </div>

                <div className="training-item">
                    <a href="https://yourdwm.co.uk/wp-content/uploads/2025/02/Agent-Brief-Tariff-update-Popup-250225.pdf" target="_blank" rel="noopener noreferrer">
                         <img src={T25} alt="Training PowerPoint 2" className="training-thumbnail" />
                     </a>
                    <p className="training-description">Agent Brief Tariff Feb25, 2025</p>
                </div>

                <div className="training-item">
                    <a href="https://yourdwm.co.uk/wp-content/uploads/2025/02/Agent-Brief-Tariff-update-Popup-240225.pdf" target="_blank" rel="noopener noreferrer">
                         <img src={T24} alt="PSR" className="training-thumbnail" />
                     </a>
                    <p className="training-description">Agent Brief Tariff Feb24, 2025</p>
                </div>

                <div className="training-item">
                    <a href="https://yourdwm.co.uk/wp-content/uploads/2025/02/Agent-Brief-EAC-200225-comp.pdf" target="_blank" rel="noopener noreferrer">
                         <img src={EAC} alt="warmHome" className="training-thumbnail" />
                     </a>
                    <p className="training-description">EAC – Quote process issue</p>
                </div>

                <div className="training-item">
                    <a href="https://yourdwm.co.uk/wp-content/uploads/2025/02/Agent-Brief-Sales-Device-comp.pdf" target="_blank" rel="noopener noreferrer">
                         <img src={SalesDevice} alt="warmHome" className="training-thumbnail" />
                     </a>
                    <p className="training-description">Agent Brief Sales Device</p>
                </div>

                <div className="training-item">
                    <a href="https://yourdwm.co.uk/wp-content/uploads/2025/02/DWM-Sales-Recording-Scorecard-17.02.25.pdf" target="_blank" rel="noopener noreferrer">
                         <img src={SalesRecording} alt="warmHome" className="training-thumbnail" />
                     </a>
                    <p className="training-description">Scottish Power Scorecard</p>
                </div>
                <div className="training-item">
                    <a href="https://yourdwm.co.uk/wp-content/uploads/2025/02/Agent-brief-Key-Customer-Benefits-260225-3.pdf" target="_blank" rel="noopener noreferrer">
                         <img src={KCB} alt="warmHome" className="training-thumbnail" />
                     </a>
                    <p className="training-description">ScottishPower Key Customer Benefits</p>
                </div>
                <div className="training-item">
                    <a href="https://yourdwm.co.uk/wp-content/uploads/2025/02/SP-FACE-Training.pdf" target="_blank" rel="noopener noreferrer">
                         <img src={Face} alt="warmHome" className="training-thumbnail" />
                     </a>
                    <p className="training-description">SP - FACE Training</p>
                </div>
                <div className="training-item">
                    <a href="https://yourdwm.co.uk/wp-content/uploads/2025/04/Easy-Compliance-April-2025.pdf" target="_blank" rel="noopener noreferrer">
                         <img src={Easy} alt="warmHome" className="training-thumbnail" />
                     </a>
                    <p className="training-description">Easy Compliance</p>
                </div>
                <div className="training-item">
                    <a href="https://yourdwm.co.uk/wp-content/uploads/2025/05/Agent-Brief-Representing-ScottishPower-010525-PDF.pdf" target="_blank" rel="noopener noreferrer">
                         <img src={Compliance} alt="warmHome" className="training-thumbnail" />
                     </a>
                    <p className="training-description">Compliance update Representing ScottishPower</p>
                </div>
                <div className="training-item">
                    <a href="https://yourdwm.co.uk/wp-content/uploads/2025/05/Agent-Brief-Boiler-Care-Scripting-Change-Popup-Venue-010525-PDF.pdf" target="_blank" rel="noopener noreferrer">
                         <img src={Boiler} alt="warmHome" className="training-thumbnail" />
                     </a>
                    <p className="training-description">Boiler Care - Scripting Change</p>
                </div>
                <div className="training-item">
                    <a href="https://yourdwm.co.uk/wp-content/uploads/2025/05/Agent-Brief-Health-and-Safety-Field-Awareness-090525.pdf" target="_blank" rel="noopener noreferrer">
                         <img src={Field} alt="warmHome" className="training-thumbnail" />
                     </a>
                    <p className="training-description">Field Safety - May 2025</p>
                </div>
                <div className="training-item">
                    <a href="https://yourdwm.co.uk/wp-content/uploads/2025/05/Agent-brief-Easy-Compliance-Incentive-090525.pdf" target="_blank" rel="noopener noreferrer">
                         <img src={EasyCompliance} alt="warmHome" className="training-thumbnail" />
                     </a>
                    <p className="training-description">Easy Compliance Incentive - May 2025</p>
                </div>
                <div className="training-item">
                    <a href="https://yourdwm.co.uk/wp-content/uploads/2025/05/Agent-Brief-Tariff-update-Pop-Up-Venue-080525.pdf" target="_blank" rel="noopener noreferrer">
                         <img src={TariffUpdate} alt="warmHome" className="training-thumbnail" />
                     </a>
                    <p className="training-description">Tariff update & Key Customer Benefits - May 2025
                    </p>
                </div>
                <div className="training-item">
                     <a href="https://yourdwm.co.uk/wp-content/uploads/2025/05/Agent-Brief.pdf" target="_blank" rel="noopener noreferrer">
                         <img src={AgentBrief} alt="Training PowerPoint 1" className="training-thumbnail" />
                     </a>
                    <p className="training-description">Agent Brief - Open Door Version 1.70.1</p>
                 </div>
                 <div className="training-item">
                     <a href="https://yourdwm.co.uk/wp-content/uploads/2025/05/Agent-brief-Power-Play-Winner-April-25.pdf" target="_blank" rel="noopener noreferrer">
                         <img src={PowerPlay} alt="Training PowerPoint 1" className="training-thumbnail" />
                     </a>
                    <p className="training-description">Agent Brief - Power Play Winner April</p>
                 </div>
                 <div className="training-item">
                     <a href="https://yourdwm.co.uk/wp-content/uploads/2025/05/Agent-Brief-System-Changes-Venue-Address-update.pdf" target="_blank" rel="noopener noreferrer">
                         <img src={AddressSearch} alt="Training PowerPoint 1" className="training-thumbnail" />
                     </a>
                    <p className="training-description">Agent Brief - System update - Venue address update</p>
                 </div>
            </div>
        </div>
  )
}

export default Qa