import React, { useState,useEffect,useRef } from 'react';
import './CreateFolderModal.css'

const CreateFolderModal = ({ onClose, onSave }) => {
  const [folderName, setFolderName] = useState('');
  const [selectedParentFolder, setSelectedParentFolder] = useState(null);
  const allFoldersAccessible = ['Папка 1', 'Папка 2', 'Папка 3'];
  const overlayRef = useRef();

  const handleSave = () => {
    if (folderName.trim() === '') {
      return;
    }
    onSave({
      name: folderName,
      parentFolder: selectedParentFolder,
    });

    onClose();
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
    <div className="create-folder-overlay">
    <div className="create-folder-modal" ref={overlayRef}>
      <h3>Создание новой папки</h3>
      <button onClick={onClose} className='close-button'>&times;</button>
      <label>
        Имя папки:
        <input type="text" value={folderName} onChange={(e) => setFolderName(e.target.value)} />
      </label>
      <label>
        Разместить в папке (опционально):
        <select
          value={allFoldersAccessible}
          onChange={(e) => setSelectedParentFolder(e.target.value)}
        >
          <option value={null}>Не выбрано</option>
          {allFoldersAccessible.map((folder, index) => (
            <option key={index} value={folder}>
              {folder}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handleSave} className='create-button'>Создать</button>
    </div>
    </div>
  );
};

export default CreateFolderModal;
