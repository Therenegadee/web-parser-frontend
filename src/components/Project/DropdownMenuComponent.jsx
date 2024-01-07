import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.css'
import CreateFolderModal from './CreateFolderModal';

import addIcon from '../../assets/icons/service/plus-box.svg'
import addIconHovered from '../../assets/icons/service/plus-box-fill.svg'
import mineIcon from '../../assets/icons/projects/mining-icon.svg'
import folderPlusIcon from '../../assets/icons/projects/folder-plus.svg'

const DropdownMenuComponent = ({ folders, setFolders }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [createFolderModalVisible, setCreateFolderModalVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    setButtonPressed(!buttonPressed)
  };

  const closeMenu = () => {
    setMenuVisible(false);
    setButtonPressed(!buttonPressed)
  };

  const openCreateFolderModal = () => {
    setCreateFolderModalVisible(true);
  };

  const closeCreateFolderModal = () => {
    setCreateFolderModalVisible(false);
  };

  const handleCreateFolder = (folderData) => {
    setFolders((prevFolders) => {
      const updatedFolders = [...prevFolders];
      const newFolder = {
        id: updatedFolders.length + 1,
        name: folderData.name,
        items: [],
      };
      if (folderData.parentFolder) {
        const parentFolder = updatedFolders.find((folder) => folder.id === folderData.parentFolder);
        if (parentFolder) {
          parentFolder.items.push(newFolder);
        }
      } else {
        updatedFolders.push(newFolder);
      }
      return updatedFolders;
    });
  
    closeCreateFolderModal();
  };


  return (
    <div className="menu-container">
      <button 
        className="menu-button" 
        onClick={toggleMenu}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img 
            src={buttonPressed ? addIconHovered : (hovered ? addIconHovered : addIcon)}
            alt="Menu Icon"
        />
      </button>
      {menuVisible && (
        <div className="menu">
        <div className='menu-element'>
          <Link to="/projects/create" onClick={closeMenu}>
            <img 
              className='menu-element-icon' 
              src={mineIcon} alt="Mine Logo" 
            />
            Создать пресет парсинга
          </Link>
        </div>
        <div className='menu-element' onClick={() => { closeMenu(); openCreateFolderModal(); }}>
          <img 
            className='menu-element-icon' 
            src={folderPlusIcon} alt="Add Folder Icon" 
          />
          Создать папку
        </div>
      </div>
      )}
      {createFolderModalVisible && (
        <CreateFolderModal onClose={closeCreateFolderModal} onSave={handleCreateFolder} />
      )}
    </div>
  );
};

export default DropdownMenuComponent;
