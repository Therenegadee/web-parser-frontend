import React, { useState } from 'react';
import './DropdownMenu.css'
import addIcon from '../../assets/icons/service/plus-box.svg'
import mineIcon from '../../assets/icons/projects/mining-icon.svg'
import folderPlusIcon from '../../assets/icons/projects/folder-plus.svg'
import { Link } from 'react-router-dom';

const DropdownMenuComponent = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleCreateFolder= () => {
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div className="menu-container">
      <button className="menu-button" onClick={toggleMenu}>
        <img 
            src={addIcon} 
        />
      </button>
      {menuVisible && (
        <div className="menu">
          <ul>
          <li className='menu-element'>
              <Link to="/projects/create" onClick={closeMenu}>
              <img 
                className='menu-element-icon' 
                src={mineIcon} alt="Mine Logo" 
              />
                Создать пресет парсинга
              </Link>
            </li>
            <li className='menu-element' onClick={() => { closeMenu(); handleCreateFolder(); }}>
              <img 
                className='menu-element-icon' 
                src={folderPlusIcon} alt="Add Folder Icon" 
              />
                Создать папку
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenuComponent;
