import React, { useState } from 'react';
import leftArrow from '../../assets/icons/service/arrow-left.svg';
import rightArrow from '../../assets/icons/service/arrow-right.svg';
import targetIcon from '../../assets/icons/service/target.svg';
import './AboutPage.css';

const storiesData = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac odio vel libero vulputate tincidunt',
    imgUrl: 'https://s3.cointelegraph.com/storage/uploads/view/cd2d036d05a5e489fc009d17649dba25.png',
  },
  {
    id: 2,
    text: 'Meet the Team',
    imgUrl: 'https://s3.cointelegraph.com/storage/uploads/view/3e5d3532c653ad07876294b3af35e4c4.png',
  },
  {
    id: 3,
    text: 'Ochumet',
    imgUrl: 'https://s3.cointelegraph.com/storage/uploads/view/0bd13cdf67395593f39ae8371eb8b8a3.png',
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

  const handlePreviewClick = (index) => {
    setCurrentStory(index);
  };

  return (
    <div className="about-page">
        <div className="about-text">
            <h1>
                <img src={targetIcon} alt="Target Icon" className="icon" />
                Цель проекта
            </h1>
                <p>
                Данный проект был создан для того, чтобы дать возможность людям,
                не имеющим навыков программирования, собирать данные с веб-сайтов
                для их целей (коммерческих, исследовательских, личных и т.д.)
                </p>
        </div>
      <div className="stories">
        <div
          className="prev-story"
          onClick={() => handlePreviewClick(currentStory === 0 ? storiesData.length - 1 : currentStory - 1)}
        >
          <img src={storiesData[currentStory === 0 ? storiesData.length - 1 : currentStory - 1].imgUrl} alt="Previous Story" />
          <p>{storiesData[currentStory === 0 ? storiesData.length - 1 : currentStory - 1].text}</p>
        </div>
        <div className="story-container">
          <img src={storiesData[currentStory].imgUrl} alt={`Story ${currentStory + 1}`} />
          <p>{storiesData[currentStory].text}</p>
        </div>
        <div
          className="next-story"
          onClick={() => handlePreviewClick(currentStory === storiesData.length - 1 ? 0 : currentStory + 1)}
        >
          <img src={storiesData[currentStory === storiesData.length - 1 ? 0 : currentStory + 1].imgUrl} alt="Next Story" />
          <p>{storiesData[currentStory === storiesData.length - 1 ? 0 : currentStory + 1].text}</p>
        </div>
        <button className="arrow-button left-arrow" onClick={handlePrev}>
           <img src={leftArrow} alt="Previous" />
        </button>
         <button className="arrow-button right-arrow" onClick={handleNext}>
           <img src={rightArrow} alt="Next" />
         </button>
      </div>
    </div>
  );
};

export default AboutPage;
