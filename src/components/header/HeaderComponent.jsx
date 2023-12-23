import React, { useState } from 'react';
import logo from '../../assets/logos/dh.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import FlyoutMenuComponent from './FlyoutMenuComponent';

const HeaderComponent = () => {

  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark' style={{ backgroundColor: '#ffc107' }}>
        <div className='container'>
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
              <FlyoutMenuComponent isLoggedIn={false} />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default HeaderComponent;

