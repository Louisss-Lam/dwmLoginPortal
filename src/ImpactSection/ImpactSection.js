import React, { useState } from 'react';
import './ImpactSection.css';
import PostImage1 from '../Graphic/liam.jpg';
import PostImage2 from '../Graphic/Product knowledge impact - liam tustin.jpg';
import PostImage3 from '../Graphic/Providing value outside of price impact - liam tustin.jpg';
import PostImage4 from '../Graphic/FUGI.jpg';
import PostImage5 from '../Graphic/steak.jpeg';

const ImpactSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [activePost, setActivePost] = useState(null);

  const posts = [
    {
      id: 1,
      image: PostImage1,
      title: 'Closing circle',
      description: 'Understand the circle of the close, from assuming the “yes” to re-closing a customer. Ideal for merchandisers/ trainers in their 2nd - 3rd week.',
      colleague: 'Liam Tustin',
    },
    {
      id: 2,
      image: PostImage2,
      title: 'Product knowledge impact',
      description: 'Product knowledge impact',
      colleague: 'Liam Tustin',
    },
    {
      id: 3,
      image: PostImage3,
      title: 'Providing value outside of price impact',
      description: 'Providing value outside of price impact',
      colleague: 'Liam Tustin',
    },
    {
      id: 4,
      image: PostImage4,
      title: 'F.U.G.I',
      description: 'A System for building more impulse.',
      colleague: 'Liam Tustin',
    },
    {
      id: 5,
      image: PostImage5,
      title: 'Sell the sizzle, not the steak',
      description: 'Built around selling the benefits of the product, not just price.',
      colleague: 'Liam Tustin',
    },
  ];

  // Open modal and set the active post
  const openModal = (post) => {
    setActivePost(post);
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setActivePost(null);
  };

  return (
    <div className="impact-section">
      <h1>Impact Section</h1>
      
      <div className="impact-post-container">
        {posts.map((post) => (
          <div key={post.id} className="impact-post" onClick={() => openModal(post)}>
            <img src={post.image} alt={`Post ${post.id}`} />
            <div className="post-description">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <p className="colleague-name">{post.colleague}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && activePost && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>×</span>
            <img src={activePost.image} alt={activePost.title} className="modal-image" />
            <div className="modal-caption">
              <h2>{activePost.title}</h2>
              <p>{activePost.description}</p>
              <p className="colleague-name">{activePost.colleague}</p>
            </div>
          </div>
        </div>
      )}

      <div className="post-button-container">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdkgyjMP35RximEeeNVBQ08gsLwx1Wp6vXntp2ievdxGfECiA/viewform?vc=0&c=0&w=1&flr=0"
          target="_blank"
          rel="noopener noreferrer"
          className="submit-post"
        >
          Post
        </a>
      </div>
    </div>
  );
};

export default ImpactSection;



