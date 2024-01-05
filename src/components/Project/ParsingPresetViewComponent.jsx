import React, { useState, useEffect } from 'react';

import xlsxIcon from '../../assets/icons/projects/xlsx.svg'
import csvIcon from '../../assets/icons/projects/csv.svg'
import mineIcon from '../../assets/icons/projects/mining-icon.svg'

import './ParsingPresetView.css';

const ParsingPresetViewComponent = ({ itemData, onClose }) => {
  const [isPopupVisible, setPopupVisibility] = useState(true);
  const [expandedLocators, setExpandedLocators] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);



  const sortedHistoryAsc = [...itemData.parsingHistory].sort((a, b) => new Date(a.date) - new Date(b.date));
  const sortedHistoryDesc = [...itemData.parsingHistory].sort((a, b) => new Date(b.date) - new Date(a.date));

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

  useEffect(() => {
    document.body.style.overflow = isPopupVisible ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPopupVisible]);

  const formatDateTime = (dateTimeString) => {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(dateTimeString).toLocaleDateString('ru-RU', options);
  };

  const downloadFile = (link) => {
    const anchor = document.createElement('a');
    anchor.href = link;
    anchor.download = link.split('/').pop();
    anchor.click();
  };

  return (
    <div>
      {isPopupVisible && (
        <div className='popup-overlay'>
          <div className='parsing-results-container'>
            <button className='close-button' onClick={handleClosePopup}>
              &times;
            </button>
            <h2 className='header'>
              <img src={mineIcon} alt="" style={{ width: '50px', marginRight: '10px', marginBottom: '10px' }} />
              {itemData.name}
            </h2>
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
                          {locator.name ? `${locator.name}` : `Элемент парсинга ${index + 1}`} {expandedLocators[index] ? '▲' : '▼'}
                        </p>
                        {expandedLocators[index] && (
                          <div>
                            <table className='info-table'>
                              <tr>
                                <td className="text-bold">Тип локатора</td>
                                <td className="text">{locator.type}</td>
                              </tr>
                              <tr>
                                <td className="text-bold">Путь к локатору</td>
                                <td className="text">{locator.pathToLocator}</td>
                              </tr>
                            </table>
                          </div>
                        )}
                      </p>
                    ))}
                  </div>
                )}
                <h3 className='subheader'>История парсинга</h3>

                {itemData.parsingHistory && (
                  <div>
                    <table className="info-table">
                      <thead>
                        <th className='text-bold'>Дата</th>
                        <th className="text-bold">Файл с результатами парсинга</th>
                      </thead>
                    {itemData.parsingHistory.map((historyItem) => (
                      <tbody>
                      <tr>
                        <td className='text'>{formatDateTime(historyItem.date)}</td>
                        <td>
                        {itemData.userParserSettings.outputFileType === 'XLSX' && (
                              <img
                                src={xlsxIcon}
                                alt='XLSX Icon'
                                style={{ height: '30px', cursor: 'pointer' }}
                                onClick={() => downloadFile(historyItem.linkToDownloadResults)}
                              />
                            )}
                            {itemData.userParserSettings.outputFileType === 'CSV' && (
                              <img
                                src={csvIcon}
                                alt='CSV Icon'
                                style={{ height: '30px', cursor: 'pointer' }}
                                onClick={() => downloadFile(historyItem.linkToDownloadResults)}
                              />
                            )}
                        </td>
                      </tr>
                    </tbody>
                    ))}
                    </table>
                  </div>
                )}
                
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ParsingPresetViewComponent;
