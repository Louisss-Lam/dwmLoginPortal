import React from 'react';
import styles from './RecommendedMaterial.module.css'; // Import the CSS module

const RecommendedMaterial = () => {
  return (
    <div className={styles.box}>
      <h2 className={styles.heading}>Recommended Material</h2>
      <div className={styles.content}>
        <div className={styles.video}>
          <a href="https://www.youtube.com/watch?v=4_AbyMhml4k" target="_blank" rel="noopener noreferrer">
            <img src="https://img.youtube.com/vi/4_AbyMhml4k/0.jpg" alt="Jordan Belfort - An Introduction to the Straight Line" className={styles.thumbnail} />
          </a>
          <p className={styles.videoTitle}>Jordan Belfort - An Introduction to the Straight Line</p>
        </div>
        <div className={styles.video}>
          <a href="https://www.youtube.com/watch?v=4GksoiCpPVA&t=304s" target="_blank" rel="noopener noreferrer">
            <img src="https://img.youtube.com/vi/4GksoiCpPVA/0.jpg" alt="Jordan Belfort - Syntax of the Straight Line" className={styles.thumbnail} />
          </a>
          <p className={styles.videoTitle}>Jordan Belfort - Syntax of the Straight Line</p>
        </div>
        <div className={styles.video}>
          <a href="https://www.youtube.com/watch?v=amdXa3CfzHw&t=1406s" target="_blank" rel="noopener noreferrer">
            <img src="https://img.youtube.com/vi/amdXa3CfzHw/0.jpg" alt="10 Steps That’ll Turn You into A Sales Machine" className={styles.thumbnail} />
          </a>
          <p className={styles.videoTitle}>10 Steps That’ll Turn You into A Sales Machine</p>
        </div>
        <div className={styles.video}>
          <a href="https://www.youtube.com/watch?v=u_ktRTWMX3M" target="_blank" rel="noopener noreferrer">
            <img src="https://img.youtube.com/vi/u_ktRTWMX3M/0.jpg" alt="Arnold Schwarzenegger 2018 - The speech that broke the internet - Most Inspiring ever" className={styles.thumbnail} />
          </a>
          <p className={styles.videoTitle}>The speech that broke the internet - Most Inspiring ever</p>
        </div>
        <div className={styles.video}>
          <a href="https://www.youtube.com/shorts/c3DiD7D4yJI" target="_blank" rel="noopener noreferrer">
            <img src="https://img.youtube.com/vi/c3DiD7D4yJI/0.jpg" alt="Why Rocky is the Most Motivational Movie EVER!" className={styles.thumbnail} />
          </a>
          <p className={styles.videoTitle}>Why Rocky is the Most Motivational Movie EVER!</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendedMaterial;
