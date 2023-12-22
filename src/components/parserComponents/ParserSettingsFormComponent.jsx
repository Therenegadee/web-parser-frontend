import React, { useState } from 'react';
import './ParserSettingsFormStyle.css';

const ElementLocator = ({ element, index, handleRemoveElement, handleInputChange }) => {
  return (
    <div className='element-locator'>
      <span>{`Элемент парсинга №${index + 1}`}</span>
      <button type='button' onClick={() => handleRemoveElement(index)} className='delete-btn'></button>
      <div className='elmnt-lctr-form-input'>
        <input
          type='text'
          name='name'
          value={element.name}
          placeholder='Название элемента'
          onChange={(e) => handleInputChange(e, index)}
        />
        <select
          name='type'
          value={element.type}
          onChange={(e) => handleInputChange(e, index)}
        >
          <option value=''>Выберите тип</option>
          <option value='CSV'>CSV</option>
          <option value='XPATH'>XPATH</option>
          <option value='Tag+Attr'>Tag+Attr</option>
        </select>
        <input
          type='text'
          name='pathToLocator'
          value={element.pathToLocator}
          placeholder='Путь к элементу'
          onChange={(e) => handleInputChange(e, index)}
        />
        {element.type === 'Tag+Attr' && (
          <input
            type='text'
            name='extraPointer'
            value={element.extraPointer}
            placeholder='Аттрибут'
            onChange={(e) => handleInputChange(e, index)}
          />
        )}
      </div>
    </div>
  );
};

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
          <h2 className='text-heading'> Создать Пресет Парсинга</h2>
          <div className='card-body'>
            <form className='form' onSubmit={handleSubmit}>
              <div className='form-group'>
                <h4 className='form-label'>Основные Настройки</h4>
                <div className='form-input'>
                <label className='form-input-label'>
                  URL первой страницы
                  <input
                    type='text'
                    name='firstPageUrl'
                    value={parserSettings.firstPageUrl}
                    placeholder='https://your.url.com/page/1'
                    onChange={(e) => setParserSettings({ ...parserSettings, firstPageUrl: e.target.value })}
                  />
                  </label>
                  <label className='form-input-label'>
                  Количество страниц для парсинга
                  <input
                    type='text'
                    name='numOfPagesToParse'
                    value={parserSettings.numOfPagesToParse}
                    placeholder='Например: 42'
                    onChange={(e) => setParserSettings({ ...parserSettings, numOfPagesToParse: e.target.value })}
                  />
                  </label>
                  <label className='form-input-label'>
                  Класс элемента
                  <input
                    type='text'
                    name='className'
                    value={parserSettings.className}
                    placeholder='product_card'
                    onChange={(e) => setParserSettings({ ...parserSettings, className: e.target.value })}
                  />
                  </label>
                  <label className='form-input-label'>
                  Тег элемента
                  <input
                    type='text'
                    name='tagName'
                    value={parserSettings.tagName}
                    placeholder='article'
                    onChange={(e) => setParserSettings({ ...parserSettings, tagName: e.target.value })}
                  />
                  </label>
                  <label className='form-input-label'>
                  CSS селектор для следующей страницы
                  <input
                    type='text'
                    name='cssSelectorNextPage'
                    value={parserSettings.cssSelectorNextPage}
                    placeholder='.pagination-next'
                    onChange={(e) => setParserSettings({ ...parserSettings, cssSelectorNextPage: e.target.value })}
                  />
                  </label>
                  <label className='form-input-label'>
                    Формат файла вывода
                    <div className='option-input'>
                      <select
                        name='outputFileType'
                        value={parserSettings.outputFileType}
                        onChange={(e) => setParserSettings({ ...parserSettings, outputFileType: e.target.value })}
                      >
                        <option value=''>Выберите тип файла</option>
                        <option value='CSV'>CSV</option>
                        <option value='XLSX'>XLSX</option>
                      </select>
                  </div>
                </label>
                </div>
              </div>
              <h4 className='form-label'>Элементы парсинга</h4>
              {parserSettings.elementLocators.map((element, index) => (
                <ElementLocator
                  key={index}
                  element={element}
                  index={index}
                  handleRemoveElement={handleRemoveElement}
                  handleInputChange={handleInputChange}
                />
              ))}
              <div className='add-element-btn'>
                <button type='button' onClick={handleAddElement}>
                  Добавить элемент парсинга
                </button>
              </div>
              {/* <div className='button'>
                <button type='submit'>Создать пресет</button>
              </div> */}
            </form>
          </div>
        </div>
        <div className='button-container'>
          <button type='submit' className='create-preset-btn'>
            Создать пресет
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParserSettingsFormComponent;
