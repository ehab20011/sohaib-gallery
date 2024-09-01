import React, { useState } from 'react';
import './photos.css';

function Photos() {
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const galleries = [
    { id: 1, name: "Khaled & Sehers' Nikkah", thumbnail: "/workphoto.jpg", photos: ["/khaleds/1.jpg", "/khaleds/2.jpg", "/khaleds/3.jpg", "/khaleds/4.jpg", "/khaleds/5.jpg", "/khaleds/6.jpg", "/khaleds/7.jpg", "/khaleds/8.jpg", "/khaleds/9.jpg", "/khaleds/10.jpg", "/khaleds/11.jpg", "/khaleds/12.jpg", "/khaleds/13.jpg", "/khaleds/14.jpg", "/khaleds/15.jpg", "/khaleds/16.jpg", "/khaleds/17.jpg", "/khaleds/18.jpg", "/khaleds/19.jpg", "/khaleds/20.jpg", "/khaleds/21.jpg", "/khaleds/22.jpg", "/khaleds/23.jpg", "/khaleds/24.jpg", "/khaleds/25.jpg", "/khaleds/26.jpg"] },
    { id: 2, name: "Portraits", thumbnail: "/PortraitsThumbnail.jpg", photos: ["/portraits/1.jpg", "/portraits/2.jpg", "/portraits/3.jpg", "/portraits/4.jpg", "/portraits/5.jpg", "/portraits/6.jpg", "/portraits/7.jpg", "/portraits/8.jpg", "/portraits/9.jpg", "/portraits/10.jpg", "/portraits/11.jpg", "/portraits/12.jpg", "/portraits/13.jpg", "/portraits/14.jpg", "/portraits/15.jpg", "/portraits/16.jpg", "/portraits/17.jpg"] },
    { id: 3, name: "Sports", thumbnail: "/SportsThumbnail.jpg", photos: ["/sports/1.jpg", "/sports/2.jpg", "/sports/3.jpg", "/sports/4.jpg", "/sports/5.jpg", "/sports/6.jpg", "/sports/7.jpg", "/sports/8.jpg", "/sports/9.jpg", "/sports/10.jpg", "/sports/11.jpg", "/sports/12.jpg", "/sports/13.jpg", "/sports/14.jpg", "/sports/15.jpg", "/sports/16.jpg", "/sports/17.jpg", "/sports/18.jpg", "/sports/19.jpg", "/sports/20.jpg", "/sports/21.jpg", "/sports/22.jpg", "/sports/23.jpg", "/sports/24.jpg", "/sports/25.jpg", "/sports/26.jpg", "/sports/27.jpg", "/sports/28.jpg", "/sports/29.jpg", "/sports/30.jpg", "/sports/31.jpg", "/sports/32.jpg", "/sports/33.jpg", "/sports/34.jpg", "/sports/35.jpg", "/sports/36.jpg", "/sports/37.jpg", "/sports/38.jpg", "/sports/39.jpg", "/sports/40.jpg", "/sports/41.jpg", "/sports/42.jpg", "/sports/43.jpg", "/sports/44.jpg", "/sports/45.jpg", "/sports/46.jpg", "/sports/47.jpg", "/sports/48.jpg", "/sports/49.jpg", "/sports/50.jpg", "/sports/51.jpg"] },
    { id: 4, name: "Automotive", thumbnail: "/AutomotiveThumbnail.jpg", photos: ["/automotive/1.jpg", "/automotive/2.jpg", "/automotive/3.jpg", "/automotive/4.jpg", "/automotive/5.jpg", "/automotive/6.jpg", "/automotive/7.jpg", "/automotive/8.jpg", "/automotive/9.jpg", "/automotive/10.jpg", "/automotive/11.jpg", "/automotive/12.jpg", "/automotive/13.jpg"] },
    { id: 5, name: "Ferion & Lilly's Engagement Party", thumbnail: "/LillyEngParty.jpg", photos: ["/ferion&lillys/1.jpg", "/ferion&lillys/2.jpg", "/ferion&lillys/3.jpg", "/ferion&lillys/4.jpg", "/ferion&lillys/5.jpg", "/ferion&lillys/6.jpg", "/ferion&lillys/7.jpg", "/ferion&lillys/8.jpg", "/ferion&lillys/9.jpg", "/ferion&lillys/10.jpg", "/ferion&lillys/11.jpg", "/ferion&lillys/12.jpg", "/ferion&lillys/13.jpg", "/ferion&lillys/14.jpg", "/ferion&lillys/15.jpg", "/ferion&lillys/16.jpg", "/ferion&lillys/17.jpg", "/ferion&lillys/18.jpg", "/ferion&lillys/19.jpg", "/ferion&lillys/20.jpg", "/ferion&lillys/21.jpg", "/ferion&lillys/22.jpg", "/ferion&lillys/23.jpg", "/ferion&lillys/24.jpg", "/ferion&lillys/25.jpg", "/ferion&lillys/26.jpg", "/ferion&lillys/27.jpg", "/ferion&lillys/28.jpg", "/ferion&lillys/29.jpg", "/ferion&lillys/30.jpg", "/ferion&lillys/31.jpg"] },
];

const openGallery = (gallery) => {
    setSelectedGallery(gallery);
    setCurrentImageIndex(null); // Reset when opening the gallery
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setCurrentImageIndex(null);
  };

  const enlargeImage = (index) => {
    setCurrentImageIndex(index);
  };

  const closeEnlargedImage = () => {
    setCurrentImageIndex(null);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedGallery.photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedGallery.photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="photos-page">
      <div className="gallery-grid">
        {galleries.map((gallery) => (
          <div
            key={gallery.id}
            className="gallery-item"
            onClick={() => openGallery(gallery)}
            style={{ backgroundImage: `url(${gallery.thumbnail})` }}
          >
            <div className="gallery-item-name">{gallery.name}</div>
          </div>
        ))}
      </div>

      {selectedGallery && (
        <div className="gallery-modal" onClick={closeGallery}>
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal content
          >
            <h2>{selectedGallery.name}</h2>
            <button onClick={closeGallery} className="close-button">Close</button>
            <div className="gallery-photos">
              {selectedGallery.photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`${selectedGallery.name} ${index + 1}`}
                  onClick={() => enlargeImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {currentImageIndex !== null && (
        <div className="gallery-modal" onClick={closeEnlargedImage}>
          <div
            className="carousel"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the carousel content
          >
            <button className="carousel-button left" onClick={showPreviousImage}>
              &lt;
            </button>
            <img
              src={selectedGallery.photos[currentImageIndex]}
              alt="Enlarged view"
              className="carousel-image"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
            <button className="carousel-button right" onClick={showNextImage}>
              &gt;
            </button>
          </div>
          <button onClick={closeEnlargedImage} className="close-button">Close</button>
        </div>
      )}
    </div>
  );
}

export default Photos;