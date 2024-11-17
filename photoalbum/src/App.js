import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <h1>Hello world
//     </h1>
//   );
// }

// export default App;


import React from 'react';

const HorizontalAlbum = ({ images = [
  { src: "/api/placeholder/400/300", alt: "Sample 1" },
  { src: "/api/placeholder/400/300", alt: "Sample 2" },
  { src: "/api/placeholder/400/300", alt: "Sample 3" },
  { src: "/api/placeholder/400/300", alt: "Sample 4" },
  { src: "/api/placeholder/400/300", alt: "Sample 5" },
  { src: "/api/placeholder/400/300", alt: "Sample 6" },
] }) => {
  const scrollContainerRef = React.useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="album-container">
      <button
        onClick={() => scroll('left')}
        className="nav-button left-button"
        aria-label="Scroll left"
      >
        ←
      </button>
      
      <button
        onClick={() => scroll('right')}
        className="nav-button right-button"
        aria-label="Scroll right"
      >
        →
      </button>

      <div ref={scrollContainerRef} className="image-container">
        {images.map((image, index) => (
          <div key={index} className="image-wrapper">
            <img
              src={image.src}
              alt={image.alt}
              className="album-image"
            />
          </div>
        ))}
      </div>

      <style>{`
        .album-container {
          position: relative;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }

        .image-container {
          display: flex;
          overflow-x: auto;
          gap: 16px;
          padding: 16px;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;  /* Firefox */
          -ms-overflow-style: none;  /* IE and Edge */
        }

        .image-container::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }

        .image-wrapper {
          flex: 0 0 auto;
          width: 320px;
          scroll-snap-align: center;
        }

        .album-image {
          width: 100%;
          height: 240px;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: rgba(255, 255, 255, 0.8);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: background-color 0.3s ease;
        }

        .nav-button:hover {
          background: rgba(255, 255, 255, 1);
        }

        .left-button {
          left: 8px;
        }

        .right-button {
          right: 8px;
        }
      `}</style>
    </div>
  );
};

export default HorizontalAlbum;