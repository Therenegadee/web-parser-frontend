import React from 'react'
import './Footer.css'
import githubIcon from '../../assets/github-mark.svg';
import tgIcon from '../../assets/telegram-mark.svg';

const FooterComponent = () => {
  return (
    <footer className='footer'>
      <div className='footer-section'>
        <a href='/about'>О проекте</a>
        <a href='/help'>Помощь</a>
      </div>
      <div className='footer-section'>
        <a> Контакты</a>
        <a href='https://github.com/therenegadee' target='_blank' rel='noopener noreferrer'>
          <img
            src={githubIcon}
            alt='GitHub Icon'
            className='github-icon'
          />
          <span>GitHub</span>
        </a>
        <a href='https://t.me/rrrenegade' target='_blank' rel='noopener noreferrer'>
          <img
            src={tgIcon}
            alt='Telegram Icon'
            className='tg-icon'
          />
          <span>Telegram</span>
        </a>
      </div>
    </footer>
  );
};

export default FooterComponent