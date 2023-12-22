import React from 'react'
import './Footer.css'
import githubIcon from '../../assets/github-mark.svg';

const FooterComponent = () => {
  return (
    <footer className='footer'>
      <div className='footer-section'>
        <a href='/about'>О проекте</a>
        <a href='/help'>Помощь</a>
      </div>
      <div className='footer-section'>
        <a href='https://github.com/therenegadee' target='_blank' rel='noopener noreferrer'>
          <img
            src={githubIcon}
            alt='GitHub Icon'
            className='github-icon'
          />
          <span>Мой GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default FooterComponent