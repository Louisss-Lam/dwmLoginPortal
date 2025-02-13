import React, { useState } from 'react';
import QuickLinks from './DashBoard/QuickLinks';
import WhatsNew from './DashBoard/WhatsNew';
import ClientCall from './DashBoard/ClientCall';
import RecommendedMaterial from './DashBoard/RecommendedMaterial';
import TopPerformer from './DashBoard/TopPerformer';
import styles from './Dashboard.module.css';

function Dashboard() {
    // Set initial state to 'whatsNew' so it opens by default
    const [activeSection, setActiveSection] = useState('whatsNew');

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <div className={styles.dashboardContainer}>
            {/* Desktop Layout */}
            <div className={styles.desktopLayout}>
                <div className={`${styles.box} ${styles.quickLinks}`}>
                    <QuickLinks />
                </div>
                <div className={`${styles.box} ${styles.whatsNew}`}>
                    <WhatsNew />
                </div>
                <div className={`${styles.box} ${styles.clientCall}`}>
                    <ClientCall />
                </div>
                <div className={`${styles.box} ${styles.recommendedMaterial}`}>
                    <RecommendedMaterial />
                </div>
                <div className={`${styles.box} ${styles.topPerformer}`}>
                    <TopPerformer />
                </div>
            </div>

            {/* Tablet Layout */}
            <div className={styles.tabletLayout}>
                <button onClick={() => toggleSection('quickLinks')} className={styles.mobileButton}>Quick Links</button>
                {activeSection === 'quickLinks' && <QuickLinks />}

                <button onClick={() => toggleSection('whatsNew')} className={styles.mobileButton}>What's New</button>
                {activeSection === 'whatsNew' && <WhatsNew />}

                <button onClick={() => toggleSection('clientCall')} className={styles.mobileButton}>SP Onboarding</button>
                {activeSection === 'clientCall' && <ClientCall />}

                <button onClick={() => toggleSection('recommendedMaterial')} className={styles.mobileButton}>Recommended Material</button>
                {activeSection === 'recommendedMaterial' && <RecommendedMaterial />}

                <button onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdEyxAK21FuEufmnWX2uOFuXwdBLUjmaa0Wd7DYMpW9yd1t8g/viewform?vc=0&c=0&w=1&flr=0', '_blank')} className={styles.mobileButton}>Suggestions</button>
            </div>

            {/* Mobile Layout */}
            <div className={styles.mobileLayout}>
                <button onClick={() => toggleSection('quickLinks')} className={styles.mobileButton}>Quick Links</button>
                {activeSection === 'quickLinks' && <QuickLinks />}

                <button onClick={() => toggleSection('whatsNew')} className={styles.mobileButton}>What's New</button>
                {activeSection === 'whatsNew' && <WhatsNew />}

                <button onClick={() => toggleSection('clientCall')} className={styles.mobileButton}>SP Onboarding</button>
                {activeSection === 'clientCall' && <ClientCall />}

                <button onClick={() => toggleSection('recommendedMaterial')} className={styles.mobileButton}>Recommended Material</button>
                {activeSection === 'recommendedMaterial' && <RecommendedMaterial />}

                <button onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdEyxAK21FuEufmnWX2uOFuXwdBLUjmaa0Wd7DYMpW9yd1t8g/viewform?vc=0&c=0&w=1&flr=0', '_blank')} className={styles.mobileButton}>Suggestions</button>
            </div>
        </div>
    );
}

export default Dashboard;


