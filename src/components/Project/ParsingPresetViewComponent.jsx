import React, { useState } from 'react';
import './ParsingPresetView.css';

const ParsingPresetViewComponent = ({ itemData, onClose }) => {
  const [isPopupVisible, setPopupVisibility] = useState(true);
  const [expandedLocators, setExpandedLocators] = useState([]);

  const handleClosePopup = () => {
    setPopupVisibility(false);
    onClose();
  };

  const handleToggleLocator = (index) => {
    setExpandedLocators((prevExpanded) => {
      const updatedExpanded = [...prevExpanded];
      updatedExpanded[index] = !updatedExpanded[index];
      return updatedExpanded;
    });
  };

  return (
    <div>
      {isPopupVisible && (
        <div className='popup-overlay'>
          <div className='parsing-results-container'>
            <button className='close-button' onClick={handleClosePopup}>
              &times;
            </button>
            <h2 className='header'>{itemData.name}</h2>
            {itemData.userParserSettings && (
              <div>
                <table className='info-table'>
                  <tr>
                    <td className='text-bold'>URL первой страницы</td>
                    <td className='text'>{itemData.userParserSettings.firstPageUrl}</td>
                  </tr>
                  <tr>
                    <td className='text-bold'>Количество страниц для парсинга</td>
                    <td className='text'>{itemData.userParserSettings.numOfPagesToParse}</td>
                  </tr>
                  <tr>
                    <td className='text-bold'>Класс элементов парсинга</td>
                    <td className='text'>{itemData.userParserSettings.className}</td>
                  </tr>
                  <tr>
                    <td className='text-bold'>Тэг элементов парсинга</td>
                    <td className='text'>{itemData.userParserSettings.tagName}</td>
                  </tr>
                  <tr>
                    <td className='text-bold'>CSS селектор следующей страницы</td>
                    <td className='text'>{itemData.userParserSettings.cssSelectorNextPage}</td>
                  </tr>
                </table>
                <h3 className='subheader'>Элементы парсинга</h3>
                {itemData.userParserSettings.elementLocators && (
                  <div>
                    {itemData.userParserSettings.elementLocators.map((locator, index) => (
                      <p key={index}>
                        <p className='locator-expanded' onClick={() => handleToggleLocator(index)}>
                          Элемент парсинга {index + 1} {expandedLocators[index] ? '[-]' : '[+]'}
                        </p>
                        {expandedLocators[index] && (
                          <div>
                            <p className='text'> Тип локатора: {locator.type}</p>
                            <p className='text'> Путь к локатору: {locator.pathToLocator}</p>
                          </div>
                        )}
                      </p>
                    ))}
                  </div>
                )}
                <a href={itemData.linkToDownloadResults} target='_blank' rel='noopener noreferrer'>
                  Ссылка для скачивания результатов
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ParsingPresetViewComponent;
