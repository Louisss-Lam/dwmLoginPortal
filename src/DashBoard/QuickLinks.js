import React from 'react';
import styles from './QuickLinks.module.css'; // Import the CSS module
import { Link } from 'react-router-dom';

function QuickLinks() {
    return (
        <div className={styles.quickLinksContainer}>
            <h2>Quick Links</h2>
            <div className={styles.linkBoxes}>
                <div className={styles.linkBox}>
                    HR Policies
                </div>
                <div className={styles.linkBox}>
                    <a 
                        href="https://freshfibre.co.uk/wp-content/uploads/2024/09/Management-Training-Pack_PDF.pdf" 
                        // target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        Manager Training Pack
                    </a>
                </div>
                <div className={styles.linkBox}>
                <Link to="/training">Training Links</Link>
                </div>
                <div className={styles.linkBox}>
                    <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdkgyjMP35RximEeeNVBQ08gsLwx1Wp6vXntp2ievdxGfECiA/viewform?vc=0&c=0&w=1&flr=0" 
                        // target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                    Impact Sessions
                    </a>
                </div>
                <div className={styles.linkBox}>
                    <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf9wZzDAf9CDzj8z_eCip-W7dfoBBNDJz-Uhf5ds7R4EhVMug/viewform?vc=0&c=0&w=1&flr=0" 
                        // target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                    Tablet check In
                    </a>
                </div>
            </div>
        </div>
    );
}

export default QuickLinks;

