// import React from 'react';
// import './Training.css';
// import Training1 from './Graphic/sp2222.jpg';
// import Training2 from './Graphic/ff111.jpg';

// const Training = () => {
//     return (
//         <div className="training-page">
//             <h1 className="training-title">Training Materials</h1>
//             <p className="training-intro">Explore our latest training resources to enhance your skills and knowledge.</p>
            
//             <div className="training-grid">
//                 <div className="training-item">
//                     <a href="https://drive.google.com/file/d/1K4P2pIGRnw82hPZ2JS-dNJbdqWjUIT_q/view" target="_blank" rel="noopener noreferrer">
//                         <img src={Training1} alt="Training PowerPoint 1" className="training-thumbnail" />
//                     </a>
//                     <p className="training-description">Training PowerPoint 1</p>
//                 </div>

//                 <div className="training-item">
//                     <a href="https://drive.google.com/file/d/1GDaLkpy_nSrPSjaRlPWWqK4FJShR3-35/view" target="_blank" rel="noopener noreferrer">
//                         <img src={Training2} alt="Training PowerPoint 2" className="training-thumbnail" />
//                     </a>
//                     <p className="training-description">Training PowerPoint 2</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Training;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Training.module.css';
import EnergyLogo from './Graphic/EnergyLogo.png';
import DWMLogo from './Graphic/DWMLogo.png';

const Training = () => {
    return (
        <div className={styles.trainingPage}>
            <h1 className={styles.trainingTitle}>Training Materials</h1>
            <p className={styles.trainingIntro}>Explore our latest training resources to enhance your skills and knowledge.</p>
            
            <div className={styles.trainingGrid}>
                <div className={styles.trainingItem}>
                    <Link to="/training/energy-services">
                        <img src={EnergyLogo} alt="Training PowerPoint 1" className={styles.trainingThumbnail} />
                    </Link>
                    <p className={styles.trainingDescription}>Energy Services</p>
                </div>

                <div className={styles.trainingItem}>
                    <Link to="/training/broadband-services">
                        <img src={DWMLogo} alt="Training PowerPoint 2" className={styles.trainingThumbnail} />
                    </Link>
                    <p className={styles.trainingDescription}>DWM Broadband</p>
                </div>
            </div>
        </div>
    );
}

export default Training;


