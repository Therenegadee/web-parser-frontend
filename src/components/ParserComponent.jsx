import React, { useState } from 'react'

const ParserComponent = () => {
  
  // const [firstPageUrl, setFirstPageUrl] = useState('');
  // const [numOfPagesToParse, setNumOfPagesToParse] = useState('');
  // const [className, setClassName] = useState('');
  // const [tagName, setTagName] = useState('');
  // const [cssSelectorNextPage, setCssSelectorNextPage] = useState('');
  // const [elementLocators, setElementLocators] = useState('');
  // const [outputFileType, setOutputFileType] = useState('');

  // return (
  //   <div className='container'>
  //     <div className='row'>
  //       <div className='card'>
  //         <h2 className='text-center'>Создать пресет парсинга</h2>
  //         <div className='card-body'>
  //           <form>
  //             <div className='form-group mb-2'>
  //               <label className='form-label'>Первая страница парсинга</label>
  //               <label className='form-label'>Кол-во страниц, которые нужно спарсить</label>
  //               <label className='form-label'>Class Name</label>
  //               <label className='form-label'>Tag Name</label>
  //               <label className='form-label'>CSS Selector Next Page</label>
  //               <label className='form-label'>Элементы парсинга</label>
  //               <label className='form-label'>Формат файла вывода</label>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
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
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Здесь можно обработать отправку данных, например, вызвать функцию для отправки на сервер
      console.log('Отправка данных:', parserSettings);
    };
  
    return (
      <div className='container'>
        <div className='row'>
          <div className='card'>
            <h2 className='text-center'>Создать пресет парсинга</h2>
            <div className='card-body'>
              <form onSubmit={handleSubmit}>
                <div className='form-group mb-2'>
                  <label className='form-label'>Первая страница парсинга</label>
                  <input
                    type='text'
                    name='firstPageUrl'
                    value={parserSettings.firstPageUrl}
                    onChange={(e) => setParserSettings({ ...parserSettings, firstPageUrl: e.target.value })}
                  />
  
                  {/* Другие поля ввода аналогичны первому */}
  
                  <label className='form-label'>Элементы парсинга</label>
                  {parserSettings.elementLocators.map((element, index) => (
                    <div key={index} className='element-locator'>
                      <input
                        type='text'
                        name='name'
                        value={element.name}
                        placeholder='Name'
                        onChange={(e) => handleInputChange(e, index)}
                      />
                      <input
                        type='text'
                        name='type'
                        value={element.type}
                        placeholder='Type'
                        onChange={(e) => handleInputChange(e, index)}
                      />
                      <input
                        type='text'
                        name='pathToLocator'
                        value={element.pathToLocator}
                        placeholder='Path to Locator'
                        onChange={(e) => handleInputChange(e, index)}
                      />
                      <input
                        type='text'
                        name='extraPointer'
                        value={element.extraPointer}
                        placeholder='Extra Pointer'
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </div>
                  ))}
                  <button type='button' onClick={handleAddElement}>
                    Добавить элемент парсинга
                  </button>
  
                  <label className='form-label'>Формат файла вывода</label>
                  <input
                    type='text'
                    name='outputFileType'
                    value={parserSettings.outputFileType}
                    onChange={(e) => setParserSettings({ ...parserSettings, outputFileType: e.target.value })}
                  />
                </div>
  
                <button type='submit'>Создать пресет</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ParserComponent