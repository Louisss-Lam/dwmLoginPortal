import React from 'react';
import styles from './QuickLinks.module.css'; // Import the CSS module
import { Link } from 'react-router-dom';

function QuickLinks() {

    // // Track clicks using the function we created
    // const trackClick = (label, url) => {
    //     console.log(`Link clicked: ${label}, URL: ${url}`);
    //     // Optional: Send data to your backend or analytics service
    // };

    return (
        <div className={styles.quickLinksContainer}>
            <h2 className={styles.header}>Quick Links</h2>
            <div className={styles.linkBoxes}>
                <div className={styles.linkBox}>
                    <a 
                        href="https://drive.google.com/drive/folders/1CNoMQw5tlIwlrDolVrpnjoMs1aj6UqLW?usp=drive_link" 
                        rel="noopener noreferrer"
                        className={styles.link}
                        // onClick={() => trackClick('HR Policies', 'https://drive.google.com/drive/folders/1CNoMQw5tlIwlrDolVrpnjoMs1aj6UqLW?usp=drive_link')} // Track the click
                    >
                        HR Policies
                    </a>
                </div>
                <div className={styles.linkBox}>
                    <a 
                        href="https://freshfibre.co.uk/wp-content/uploads/2024/09/Management-Training-Pack_PDF.pdf" 
                        rel="noopener noreferrer"
                        className={styles.link}
                        // onClick={() => trackClick('Manager Training Pack', 'https://freshfibre.co.uk/wp-content/uploads/2024/09/Management-Training-Pack_PDF.pdf')} // Track the click
                    >
                        Manager Training Pack
                    </a>
                </div>
                <div className={styles.linkBox}>
                    <Link 
                        to="/training" 
                        // onClick={() => trackClick('Training Links', '/training')} // Track the click
                    >
                        Training Links
                    </Link>
                </div>
                <div className={styles.linkBox}>
                    <Link 
                        to="/impactsection" 
                        // onClick={() => trackClick('Impact Sessions', '/impactsection')} // Track the click
                    >
                        Impact Sessions
                    </Link>
                </div>
                <div className={styles.linkBox}>
                    <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf9wZzDAf9CDzj8z_eCip-W7dfoBBNDJz-Uhf5ds7R4EhVMug/viewform?vc=0&c=0&w=1&flr=0" 
                        rel="noopener noreferrer"
                        className={styles.link}
                        // onClick={() => trackClick('iPad Request', 'https://docs.google.com/forms/d/e/1FAIpQLSf9wZzDAf9CDzj8z_eCip-W7dfoBBNDJz-Uhf5ds7R4EhVMug/viewform?vc=0&c=0&w=1&flr=0')} // Track the click
                    >
                        iPad Request
                    </a>
                </div>
                <div className={styles.linkBox}>
                    <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeMAihSpnHObvvFvtZBBW7gf8R7F6xs9s09fmaQIjq4hlxSig/viewform" 
                        rel="noopener noreferrer"
                        className={styles.link}
                        // onClick={() => trackClick('iPad Request', 'https://docs.google.com/forms/d/e/1FAIpQLSf9wZzDAf9CDzj8z_eCip-W7dfoBBNDJz-Uhf5ds7R4EhVMug/viewform?vc=0&c=0&w=1&flr=0')} // Track the click
                    >
                        Trainer's Questionnaire
                    </a>
                </div>
            </div>
        </div>
    );
}

export default QuickLinks;

