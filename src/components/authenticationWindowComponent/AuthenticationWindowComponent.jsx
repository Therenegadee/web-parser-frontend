import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import './AuthenticationWindow.css';

const AuthenticationWindowComponent = ({onClose}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const overlayRef = useRef();

  const handleLogin = () => {
    console.log('Logging in with:', email, password);
    onClose();
  };

//   useEffect(() => {
//     console.log('overlayRef.current:', overlayRef.current);
//   }, []);


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
            <label>Логин / Email:</label>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} />
            <label>Пароль: </label>
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                />
            <Link to="/recovery-password" style={{ fontSize: '15px' }}>Забыли пароль?</Link>
            <button onClick={handleLogin}>Войти</button>
        </div>
    </div>
  );
};

export default AuthenticationWindowComponent;
