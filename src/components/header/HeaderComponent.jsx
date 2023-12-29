import React, { useState, useEffect } from 'react';
import logo from '../../assets/logos/dh.svg';
import lockOpen from '../../assets/icons/service/lock-open.svg';
import lockClosed from '../../assets/icons/service/lock-closed.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import FlyoutMenuComponent from './FlyoutMenuComponent';

const HeaderComponent = () => {

  const [currentImage, setCurrentImage] = useState(lockClosed);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === lockClosed ? lockOpen : lockClosed
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark' style={{ backgroundColor: '#ffc107' }}>
        <div className='container'>
        <img src={currentImage} alt='Lock Opening and Closing' className='navbar-gif' />
          <a className='navbar-brand' href='/'>
            <img src={logo} alt='Logo' style={{ height: '30px' }} />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ml-auto'>
              <li>
                <Link className='nav-link' to='/how-to-start'>
                  Как начать
                </Link>
              </li>
              <li>
                <Link className='nav-link' to='/about'>
                  О проекте
                </Link>
              </li>
            </ul>
          </div>
          <ul className='navbar-nav'>
            <li>
              {/* <Link className='nav-link' to='/profile'>
                <img
                  src={profileIcon}
                  alt='Profile Icon'
                  style={{ height: '30px' }}
                />
              </Link> */}
              <FlyoutMenuComponent isLoggedIn={true} />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default HeaderComponent;

