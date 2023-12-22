import React from 'react';
import logo from '../../assets/dh.svg';
import './Header.css';
import profileLogo from '../../assets/skull-svgrepo-com.svg'
import { Link } from 'react-router-dom';

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
              <li className='nav-item'>
                <a className='nav-link' href='/how-to-start'>
                  Как начать
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/about'>
                  О проекте
                </a>
              </li>
            </ul>
          </div>
          <div className='nav-item'>
            <a className='nav-link' href='/profile'>
              <img src={profileLogo} alt='Profile Logo' style={{ height: '30px' }}/>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderComponent;
