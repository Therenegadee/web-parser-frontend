import React from 'react';
import './HomePage.css'
import background from '../../assets/backgrounds/home-page-background.svg'

const HomePageComponent = () => {
  return (
    <>
      <div className='welcome-block' style={{ backgroundImage: `url(${background})` }}>
        <h1>Data Harvest</h1>
        <h4>Сделай веб-данные своим преимуществом</h4>
      </div>
      <div className='home-page-block'>
      
      <div className='block-text'>
        <h1>
          <img  alt="Target Icon" className="icon" />
          Цель проекта
        </h1>
        <p>
        Данный проект был создан для того, чтобы дать возможность людям,
        не имеющим навыков программирования, собирать данные с веб-сайтов
        для их целей (коммерческих, исследовательских, личных и т.д.)
        </p>
      </div>

      <div className='block-text'>
        <h1>
          <img  alt="Target Icon" className="icon" />
          Цель проекта
        </h1>
        <p>
        Данный проект был создан для того, чтобы дать возможность людям,
        не имеющим навыков программирования, собирать данные с веб-сайтов
        для их целей (коммерческих, исследовательских, личных и т.д.)
        </p>
      </div>
      
      <div className='block-text'>
        <h1>
          <img  alt="Target Icon" className="icon" />
          Цель проекта
        </h1>
        <p>
        Данный проект был создан для того, чтобы дать возможность людям,
        не имеющим навыков программирования, собирать данные с веб-сайтов
        для их целей (коммерческих, исследовательских, личных и т.д.)
        </p>
      </div>
      
      <div className='block-text'>
        <h1>
          <img  alt="Target Icon" className="icon" />
          Цель проекта
        </h1>
        <p>
        Данный проект был создан для того, чтобы дать возможность людям,
        не имеющим навыков программирования, собирать данные с веб-сайтов
        для их целей (коммерческих, исследовательских, личных и т.д.)
        </p>
      </div>
      
      <div className='block-text'>
        <h1>
          <img  alt="Target Icon" className="icon" />
          Цель проекта
        </h1>
        <p>
        Данный проект был создан для того, чтобы дать возможность людям,
        не имеющим навыков программирования, собирать данные с веб-сайтов
        для их целей (коммерческих, исследовательских, личных и т.д.)
        </p>
      </div>
      
      
      </div>
    </>
  );
};

export default HomePageComponent;