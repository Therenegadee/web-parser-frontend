import React, { useState } from 'react';
import './Header.css'
import './FlyoutMenu.css'
import menuIcon from '../../assets/icons//toggle-menu/menu-bar.svg'
import profileIcon from '../../assets/icons/toggle-menu/account.svg'
import mineIcon from '../../assets/icons/toggle-menu/mine.svg'
import historyIcon from '../../assets/icons/toggle-menu/history.svg'
import loginIcon from '../../assets/icons/toggle-menu/login.svg'
import AuthenticationWindowComponent from '../authenticationWindowComponent/AuthenticationWindowComponent';
import { Link } from 'react-router-dom';

const FlyoutMenuComponent = ({isLoggedIn}) => {
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
              <Link to="/profile" onClick={closeMenu}>
              <img 
                className='flyout-menu-element-icon' 
                src={profileIcon} alt="Profile" 
              />
                Профиль
              </Link>
            </li>
            <li className='flyout-menu-element'>
              <Link to="/parser/create" onClick={closeMenu}>
              <img 
                className='flyout-menu-element-icon' 
                src={mineIcon} alt="Mine Logo" 
              />
                Создать пресет парсинга
              </Link>
            </li>
            <li className='flyout-menu-element'>
              <Link to="/parser/history" onClick={closeMenu}>
              <img 
                className='flyout-menu-element-icon' 
                src={historyIcon} alt="History of Parsing Logo" 
                style={{height: '27px'}}
              />
                История парсинга
              </Link>
            </li>
            </>
            ) : (
              <li className="flyout-menu-element">
                <button className="login-button" onClick={openLoginForm}>
                <img 
                  className='flyout-menu-element-icon' 
                  src={loginIcon} alt="Login Icon" 
                  style={{height: '27px'}}
                />
                  Войти / Зарегистрироваться
                </button>
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
