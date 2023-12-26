// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom'; 
// import './AuthenticationWindow.css';

// const AuthenticationWindowComponent = ({onClose}) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const overlayRef = useRef();

//   const handleLogin = () => {
//     console.log('Logging in with:', email, password);
//     onClose();
//   };

// //   useEffect(() => {
// //     console.log('overlayRef.current:', overlayRef.current);
// //   }, []);


// const handleOutsideClick = (event) => {
//     if (!overlayRef.current.contains(event.target)) {
//       onClose();
//     }
//   };

// useEffect(() => {
//     document.body.addEventListener('mousedown', handleOutsideClick);
//     return () => {
//       document.body.removeEventListener('mousedown', handleOutsideClick);
//     };
//   }, [onClose]);

//   return (
//     <div className="authentication-overlay">
//         <div className="authentication-window" ref={overlayRef}>
//             <h2>Вход / Регистрация</h2>
//             <label>Логин / Email:</label>
//             <input 
//                 type="email" 
//                 value={email} 
//                 onChange={(e) => setEmail(e.target.value)} />
//             <label>Пароль: </label>
//             <input 
//                 type="password" 
//                 value={password} 
//                 onChange={(e) => setPassword(e.target.value)} 
//                 />
//             <Link to="/recovery-password" style={{ fontSize: '15px' }} onClick={onClose}>Забыли пароль?</Link>
//             <button onClick={handleLogin} style={{fontFamily: 'Epilepsy Sans Bold'}}>Войти</button>
//         </div>
//     </div>
//   );
// };

// export default AuthenticationWindowComponent;


import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './AuthenticationWindow.css';

const AuthenticationWindowComponent = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationEmail, setRegistrationEmail] = useState('');
  const [registrationLogin, setRegistrationLogin] = useState('');
  const [registrationPassword, setRegistrationPassword] = useState('');
  const [activeTab, setActiveTab] = useState('login'); // Added state for the active tab
  const overlayRef = useRef();

  const handleLogin = () => {
    console.log('Logging in with:', email, password);
    onClose();
  };

  const handleRegister = () => {
    console.log('Registering with:', registrationEmail, registrationLogin, registrationPassword);
    onClose();
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleOutsideClick = (event) => {
    if (!overlayRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.body.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="authentication-overlay">
      <div className="authentication-window" ref={overlayRef}>
        <h2>Вход / Регистрация</h2>
        <div className="tab-buttons">
          <button
            className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => handleTabChange('login')}
          >
            Войти
          </button>
          <button
            className={`tab-button ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => handleTabChange('register')}
          >
            Зарегистрироваться
          </button>
        </div>
        <div>
          {activeTab === 'login' && (
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Пароль:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link to="/recovery-password" style={{ fontSize: '15px' }} onClick={onClose}>
                Забыли пароль?
              </Link>
              <button onClick={handleLogin} className="action-button">
                Войти
              </button>
            </div>
          )}
          {activeTab === 'register' && (
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={registrationEmail}
                onChange={(e) => setRegistrationEmail(e.target.value)}
              />
              <label>Логин:</label>
              <input
                type="text"
                value={registrationLogin}
                onChange={(e) => setRegistrationLogin(e.target.value)}
              />
              <label>Пароль:</label>
              <input
                type="password"
                value={registrationPassword}
                onChange={(e) => setRegistrationPassword(e.target.value)}
              />
              <button onClick={handleRegister} className="action-button">
                Зарегистрироваться
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthenticationWindowComponent;
