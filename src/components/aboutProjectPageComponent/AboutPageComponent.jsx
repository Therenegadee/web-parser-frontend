import React, { useState } from 'react';
import leftArrow from '../../assets/icons/service/arrow-left.svg'
import rightArrow from '../../assets/icons/service/arrow-right.svg'
import './AboutPage.css';

const storiesData = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac odio vel libero vulputate tincidunt',
      imgUrl: 'https://www.fonstola.ru/images/201506/fonstola.ru_187341.jpg',
    },
    {
      id: 2,
      text: 'Meet the Team',
      imgUrl: 'url_to_image_2.jpg',
    },
  ];
  
  const AboutPage = () => {
    const [currentStory, setCurrentStory] = useState(0);
  
    const handlePrev = () => {
      setCurrentStory((prev) => (prev === 0 ? storiesData.length - 1 : prev - 1));
    };
  
    const handleNext = () => {
      setCurrentStory((prev) => (prev === storiesData.length - 1 ? 0 : prev + 1));
    };
  
    return (
<div className="about-page">
      <div className="instagram-stories">
        <div className="story-container">
          <img src={storiesData[currentStory].imgUrl} alt={`Story ${currentStory + 1}`} />
          <p>{storiesData[currentStory].text}</p>
        </div>
        <button className="arrow-button left-arrow" onClick={handlePrev}>
            <img src={leftArrow} alt="Previous" />
        </button>
        <button className="arrow-button right-arrow" onClick={handleNext}>
            <img src={rightArrow} alt="Next" />
        </button>
      </div>
      <div className="about-text">
        <h1>Welcome to Our Project</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac odio vel libero
          vulputate tincidunt.
        </p>
      </div>
    </div>
    );
  };
  
  export default AboutPage;