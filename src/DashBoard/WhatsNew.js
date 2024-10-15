import React from 'react';
import './WhatsNew.css';
import WeeklyLeaderboard from '../Graphic/weeklyLeaderboard.jpg';
import NewsLetter from '../Graphic/Newsletter.jpg';
import JobVacancies from '../Graphic/JobVacancies.jpg';
import LatestNews from '../Graphic/LatestNews.jpg';

const WhatsNew = () => {
  return (
    <div className="whatsnew">
      <div className="whatsnew-wrapper">
        <div className="whatsnew-container">
          <div className="whatsnew-card">
          <a href="https://yourdwm.co.uk/wp-content/uploads/2024/10/Weekly-League-Table-30_09_24.pdf" target="_blank" rel="noopener noreferrer">
            <img src={WeeklyLeaderboard} alt="A Box" className="whatsnew-image" />
          </a>
          </div>
          <div className="whatsnew-card">
          <a href="https://yourdwm.co.uk/wp-content/uploads/2024/10/DWM-Newsletter-Q3_2024.pdf" target="_blank" rel="noopener noreferrer">
            <img src={NewsLetter} alt="B Box" className="whatsnew-image" />
          </a>
          </div>
          <div className="whatsnew-card">
          <a href="https://yourdwm.co.uk/recruitment/" target="_blank" rel="noopener noreferrer">
            <img src={JobVacancies} alt="C Box" className="whatsnew-image" />
          </a>
          </div>
          <div className="whatsnew-card">
            <img src={LatestNews} alt="D Box" className="whatsnew-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;

