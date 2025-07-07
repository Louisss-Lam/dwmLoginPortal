import React from 'react';
import './WhatsNew.css';
import WeeklyLeaderboard from '../Graphic/weeklyLeaderboard.jpg';
import NewsLetter from '../Graphic/Newsletter.jpg';
import JobVacancies from '../Graphic/JobVacancies.jpg';
import LatestNews from '../Graphic/LatestNews.jpg';

const WhatsNew = () => {
  return (
    <div className="whatsnew">
      {/* Desktop Version */}
      <div className="whatsnew-wrapper desktop-only">
        <div className="whatsnew-container">
          <div className="whatsnew-card">
            <a href="https://yourdwm.co.uk/wp-content/uploads/2025/04/07_04_25-League-Table.pdf" target="_blank" rel="noopener noreferrer">
              <img src={WeeklyLeaderboard} alt="A Box" className="whatsnew-image" />
            </a>
          </div>
          <div className="whatsnew-card">
            <a href="https://yourdwm.co.uk/wp-content/uploads/2025/07/DWM-2025-Q2-Newsletter-compressed.pdf" target="_blank" rel="noopener noreferrer">
              <img src={NewsLetter} alt="B Box" className="whatsnew-image" />
            </a>
          </div>
          <div className="whatsnew-card">
            <a href="https://yourdwm.co.uk/recruitment/" target="_blank" rel="noopener noreferrer">
              <img src={JobVacancies} alt="C Box" className="whatsnew-image" />
            </a>
          </div>
          <div className="whatsnew-card">
            <a href="https://www.energylivenews.com/" target="_blank" rel="noopener noreferrer">
              <img src={LatestNews} alt="D Box" className="whatsnew-image" />
            </a>
          </div>
        </div>
      </div>

      {/* Tablet Version */}
      <div className="whatsnew-wrapper tablet-only">
        <div className="whatsnew-container-tablet">
          <div className="whatsnew-card-tablet">
            <a href="https://yourdwm.co.uk/wp-content/uploads/2025/04/07_04_25-League-Table.pdf" target="_blank" rel="noopener noreferrer">
              <img src={WeeklyLeaderboard} alt="A Box" className="whatsnew-image" />
            </a>
          </div>
          <div className="whatsnew-card-tablet">
            <a href="https://yourdwm.co.uk/wp-content/uploads/2025/04/DWM-Q1-2025-Newsletter-compressed.pdf" target="_blank" rel="noopener noreferrer">
              <img src={NewsLetter} alt="B Box" className="whatsnew-image" />
            </a>
          </div>
          <div className="whatsnew-card-tablet">
            <a href="https://yourdwm.co.uk/recruitment/" target="_blank" rel="noopener noreferrer">
              <img src={JobVacancies} alt="C Box" className="whatsnew-image" />
            </a>
          </div>
          <div className="whatsnew-card-tablet">
            <a href="https://www.energylivenews.com/" target="_blank" rel="noopener noreferrer">
              <img src={LatestNews} alt="D Box" className="whatsnew-image" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="whatsnew-wrapper mobile-only">
        <div className="whatsnew-container-mobile">
          <div className="whatsnew-card-mobile">
            <a href="https://yourdwm.co.uk/wp-content/uploads/2025/04/07_04_25-League-Table.pdf" target="_blank" rel="noopener noreferrer">
              <img src={WeeklyLeaderboard} alt="A Box" className="whatsnew-image" />
            </a>
          </div>
          <div className="whatsnew-card-mobile">
            <a href="https://yourdwm.co.uk/wp-content/uploads/2025/04/DWM-Q1-2025-Newsletter-compressed.pdf" target="_blank" rel="noopener noreferrer">
              <img src={NewsLetter} alt="B Box" className="whatsnew-image" />
            </a>
          </div>
          <div className="whatsnew-card-mobile">
            <a href="https://yourdwm.co.uk/recruitment/" target="_blank" rel="noopener noreferrer">
              <img src={JobVacancies} alt="C Box" className="whatsnew-image" />
            </a>
          </div>
          <div className="whatsnew-card-mobile">
            <a href="https://www.energylivenews.com/" target="_blank" rel="noopener noreferrer">
            <img src={LatestNews} alt="D Box" className="whatsnew-image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;


