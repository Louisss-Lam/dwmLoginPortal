import React from 'react';
import QuickLinks from './DashBoard/QuickLinks';
import WhatsNew from './DashBoard/WhatsNew';
import ClientCall from './DashBoard/ClientCall';
import RecommendedMaterial from './DashBoard/RecommendedMaterial';
import TopPerformer from './DashBoard/TopPerformer';
import styles from './Dashboard.module.css'; // Importing the CSS module

function Dashboard() {
    return (
        <div className={styles.dashboardContainer}>
            {/* Each section is represented by a single large box component */}
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
    );
}

export default Dashboard;
