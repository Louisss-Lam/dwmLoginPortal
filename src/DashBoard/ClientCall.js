import React from 'react';
import styles from './ClientCall.module.css'; // Import the CSS module

const ClientCall = () => {
  return (
    <div className={styles.clientCallContainer}>
      <h2 className={styles.heading}>SP Onboarding</h2>
      <div className={styles.linkBoxes}>
        <div className={styles.linkBox}>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfnsLybq4374L2Ej2xxvOP0e9R-1e9gN4E3I4OOIpKGsofo8w/viewform">
            Energy Training Submission Form
          </a>
        </div>
        <div className={styles.linkBox}>
          <a href="http://jotform.com/dontwastemoney/SP-D2D-Application-DWM-Form">
            Scottish Power Application Form
          </a>
        </div>
        <div className={styles.linkBox}>
          <a href="http://jotform.com/dontwastemoney/dwm-ES-agent-contract">
            Scottish Power Declaration Form
          </a>
        </div>
      </div>    
    </div>
  );
};

export default ClientCall;
