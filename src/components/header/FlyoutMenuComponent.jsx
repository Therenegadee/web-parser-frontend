import React, { useState } from 'react';
import './Header.css'
import './FlyoutMenu.css'
import menuIcon from '../../assets/icons//toggle-menu/menu-bar.svg'
import projectsIcon from '../../assets/icons/toggle-menu/bag.svg'
import mineIcon from '../../assets/icons/toggle-menu/mine.svg'
import settingsIcon from '../../assets/icons/toggle-menu/settings.svg'
import loginIcon from '../../assets/icons/toggle-menu/login.svg'
import AuthenticationWindowComponent from '../AuthenticationWindow/AuthenticationWindowComponent';
import { Link } from 'react-router-dom';

const FlyoutMenuComponent = ({ isLoggedIn }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  const openLoginForm = () => {
    setShowLoginForm(true);
    closeMenu();
  };

  const closeLoginForm = () => {
    setShowLoginForm(false);
  };

  return (
    <div className="flyout-menu-container">
      <button className="menu-button" onClick={toggleMenu}>
        <img 
            src={menuIcon} 
        />
      </button>
      {menuVisible && (
        <div className="flyout-menu">
          <ul>
          {isLoggedIn ? (
              <>
            <li className='flyout-menu-element'>
              <Link to="/projects" onClick={closeMenu}>
              <img 
                className='flyout-menu-element-icon' 
                src={projectsIcon} alt="Projects" 
              />
                Проекты
              </Link>
            </li>
            <li className='flyout-menu-element'>
              <Link to="/projects/create" onClick={closeMenu}>
              <img 
                className='flyout-menu-element-icon' 
                src={mineIcon} alt="Mine Logo" 
              />
                Создать пресет парсинга
              </Link>
            </li>
            <li className='flyout-menu-element'>
              <Link to="/settings" onClick={closeMenu}>
              <img 
                className='flyout-menu-element-icon' 
                src={settingsIcon} alt="Settings" 
                style={{height: '27px'}}
              />
                Настройки
              </Link>
            </li>
            </>
            ) : (
              <li className="flyout-menu-element">
                <span className="login-element" onClick={openLoginForm}>
                <img 
                  className='flyout-menu-element-icon' 
                  src={loginIcon} alt="Login Icon" 
                  style={{height: '27px'}}
                />
                  Войти / Зарегистрироваться
                </span>
              </li>
            )}
          </ul>
        </div>
      )}
      {showLoginForm && (
        <AuthenticationWindowComponent onClose={closeLoginForm} />
      )}
    </div>
  );
};

export default FlyoutMenuComponent;
