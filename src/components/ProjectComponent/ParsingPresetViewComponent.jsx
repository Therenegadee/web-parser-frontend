import React from 'react';
import './ParsingPresetView.css';

const ParsingPresetViewComponent = ({ itemData }) => {
  return (
    <div>
      {itemData && (
        <div className='parsing-details'>
          <h3>Детали {itemData.name}</h3>
          {itemData.userParserSettings && (
            <div>
              <p>First Page URL: {itemData.userParserSettings.firstPageUrl}</p>
              <a href={itemData.linkToDownloadResults} target='_blank' rel='noopener noreferrer'>
                Ссылка для скачивания результатов
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ParsingPresetViewComponent;
