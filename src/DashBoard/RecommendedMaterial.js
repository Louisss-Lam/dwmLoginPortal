import React, { useState } from 'react';
import styles from './RecommendedMaterial.module.css'; // Import the CSS module

const RecommendedMaterial = () => {
  const [visibleItems, setVisibleItems] = useState(4); // State to manage visible items
  const recommendationData = [
    {
      title: 'UNTAPPED podcast',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/30/d8/da/30d8dad3-e385-d23c-61a6-ec685af93f33/mza_16338586423036854529.jpeg/1200x1200bf.webp',
      link: 'https://open.spotify.com/show/0RxsgH2rGo40esXKht3A7o?si=e0722207bfaa477e&nd=1&dlsi=5e6167ae126a49d6',
    },
    {
      title: 'The Diary Of A CEO with Steven Bartlett',
      image: 'https://m.media-amazon.com/images/I/41NlQGjBq3L._SL500_.jpg',
      link: 'https://open.spotify.com/show/7iQXmUT7XGuZSzAMjoNWlX?si=c524e021f5504083&nd=1&dlsi=1a4382cef2c44ba9',
    },
    {
      title: 'The High Performance Podcast',
      image: 'https://www.sportspodcastgroup.com/wp-content/uploads/2023/01/High-Perfomance-Podcast-Art-2022.jpeg',
      link: 'https://open.spotify.com/show/3WKI7p6tuq6kJRw1xfRS7Q?si=078c630ab5614077&nd=1&dlsi=a657a14658bc4a19',
    },
    {
      title: '10 Steps That’ll Turn You into A Sales Machine',
      image: 'https://img.youtube.com/vi/amdXa3CfzHw/0.jpg',
      link: 'https://www.youtube.com/watch?v=amdXa3CfzHw&t=1406s',
    },
    {
      title: 'The speech that broke the internet - Most Inspiring ever',
      image: 'https://img.youtube.com/vi/u_ktRTWMX3M/0.jpg',
      link: 'https://www.youtube.com/watch?v=u_ktRTWMX3M',
    },
    {
      title: 'Why Rocky is the Most Motivational Movie EVER!',
      image: 'https://img.youtube.com/vi/c3DiD7D4yJI/0.jpg',
      link: 'https://www.youtube.com/shorts/c3DiD7D4yJI',
    },
    {
      title: 'The Last Dance',
      image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da847391853baf1e1dea0658ddc7',
      link: 'https://www.netflix.com/gb/title/80203144?s=i&trkid=258593161&vlang=en',
    },
    {
      title: 'Relentless: From Good to Great to Unstoppable',
      image: 'https://m.media-amazon.com/images/I/71CWO5p9yfL._SY522_.jpg',
      link: 'https://www.amazon.co.uk/Relentless-Unstoppable-Tim-S-Grover/dp/1476714207',
    },
    {
      title: 'The Creative Act: A Way of Being',
      image: 'https://m.media-amazon.com/images/I/71dUSlTVOwL._SY522_.jpg',
      link: 'https://www.amazon.co.uk/Creative-Act-Way-Being/dp/1838858636',
    },
    {
      title: 'Back Safety - Top 10 Lifting Rules',
      image: 'https://img.youtube.com/vi/LaFoZR3gd44/0.jpg',
      link: 'https://www.youtube.com/watch?v=LaFoZR3gd44',
    },
    {
      title: 'Counter Tally Count',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/74/b0/80/74b08031-5f68-a55e-95a8-e58fc4d20d12/AppIcon-0-0-1x_U007epad-0-85-220.png/434x0w.webp',
      link: 'https://apps.apple.com/us/app/counter-tally-count/id1144352844',
    }
  ];

  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 5); // Show 5 more items
  };

  return (
    <div className={styles.box}>
      <h2 className={styles.heading}>Recommended Material</h2>
      <div className={styles.content}>
        {recommendationData.slice(0, visibleItems).map((item, index) => (
          <div key={index} className={styles.video}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.image} alt={item.title} className={styles.thumbnail} />
            </a>
            <p className={styles.videoTitle}>{item.title}</p>
          </div>
        ))}
      </div>
      {visibleItems < recommendationData.length && (
        <div className={styles.showMore}>
          <button onClick={handleShowMore} className={styles.showMoreButton}>
            Show More →
          </button>
        </div>
      )}
    </div>
  );
};

export default RecommendedMaterial;

