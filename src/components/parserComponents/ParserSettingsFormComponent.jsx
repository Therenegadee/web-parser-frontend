import React, { useState } from 'react';
import './ParserSettingsFormStyle.css';

const ParserSettingsFormComponent = () => {
  const [parserSettings, setParserSettings] = useState({
    firstPageUrl: '',
    numOfPagesToParse: '',
    className: '',
    tagName: '',
    cssSelectorNextPage: '',
    elementLocators: [
      {
        name: '',
        type: '',
        pathToLocator: '',
        extraPointer: '',
      },
    ],
    outputFileType: '',
  });

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const updatedElementLocators = [...parserSettings.elementLocators];
    updatedElementLocators[index][name] = value;

    setParserSettings({
      ...parserSettings,
      elementLocators: updatedElementLocators,
    });
  };

  const handleAddElement = () => {
    setParserSettings({
      ...parserSettings,
      elementLocators: [
        ...parserSettings.elementLocators,
        {
          name: '',
          type: '',
          pathToLocator: '',
          extraPointer: '',
        },
      ],
    });
  };

  const handleRemoveElement = (index) => {
    const updatedElementLocators = [...parserSettings.elementLocators];
    updatedElementLocators.splice(index, 1);

    setParserSettings({
      ...parserSettings,
      elementLocators: updatedElementLocators,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Отправка данных:', parserSettings);
  };

  return (
    <div className='container-parser'>
      <div className='row'>
        <div className='card-parser'>
          <h2 className='text-center'> Пресет парсинга</h2>
          <div className='card-body'>
            <form className='form' onSubmit={handleSubmit}>
              <div className='form-group'>
              <h4 className='form-label'>Элементы парсинга</h4>
                {parserSettings.elementLocators.map((element, index) => (
                  <div key={index} className='element-locator'>
                    <span>{`Элемент парсинга №${index + 1}`}</span>
                    <button type='button' onClick={() => handleRemoveElement(index)} className='delete-btn'>
                    </button>
                    <div className='form-input'>
                      <input
                        type='text'
                        name='name'
                        value={element.name}
                        placeholder='Название элемента'
                        onChange={(e) => handleInputChange(e, index)}
                      />
                      <input
                        type='text'
                        name='type'
                        value={element.type}
                        placeholder='Тип элемента'
                        onChange={(e) => handleInputChange(e, index)}
                      />
                      <input
                        type='text'
                        name='pathToLocator'
                        value={element.pathToLocator}
                        placeholder='Путь к элементу'
                        onChange={(e) => handleInputChange(e, index)}
                      />
                      <input
                        type='text'
                        name='extraPointer'
                        value={element.extraPointer}
                        placeholder='Аттрибут'
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </div>
                  </div>
                ))}
                <div className='add-elemnt-btn'>
                  <button type='button' onClick={handleAddElement}>
                    Добавить элемент парсинга
                  </button>
                </div>
              </div>
              <div className='button'>
                <button type='submit'>Создать пресет</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParserSettingsFormComponent;
