import React from 'react'

const ListParserSettingsComponent = () => {
    const dummyData = [
        {
            "id": 1,
            "firstPageUrl": "https://zhongchou.modian.com/?_mpos=h_nav_discover",
            "numOfPagesToParse": 2,
            "className": "pc_ga_pro_index_17",
            "tagName": "a",
            "cssSelectorNextPage": ".next",
            "header": ["funds_raised", "people_support"],
            "elementLocators": [{
                "type": "XPATH",
                "pathToLocator": "/html/body/div[1]/div/div[3]/div[2]/div[2]/div[1]/div[1]/h3/span",
                "extraPointer": null
            },
            {
                "type": "XPATH",
                "pathToLocator": "/html/body/div[1]/div/div[3]/div[2]/div[2]/div[1]/div[3]/h3/span",
                "extraPointer": null
            }],
            "outputFileType": "XLSX"
        },
        {
            "id": 2,
            "firstPageUrl": "https://zhongchou.modian.com/?_mpos=h_nav_discover",
            "numOfPagesToParse": 2,
            "className": "pc_ga_pro_index_17",
            "tagName": "a",
            "cssSelectorNextPage": ".next",
            "header": ["funds_raised", "people_support"],
            "elementLocators": [{
                "type": "XPATH",
                "pathToLocator": "/html/body/div[1]/div/div[3]/div[2]/div[2]/div[1]/div[1]/h3/span",
                "extraPointer": null
            },
            {
                "type": "XPATH",
                "pathToLocator": "/html/body/div[1]/div/div[3]/div[2]/div[2]/div[1]/div[3]/h3/span",
                "extraPointer": null
            }],
            "outputFileType": "XLSX"
        },

    ];
  return (
    <div>
        <h2>Список параметров настроек парсинга</h2>
        <table>
            <thead>
                <tr>
                    <th>Ссылка на первую страницу</th>
                    <th>Кол-во страниц для парсинга</th>
                    <th>Заголовки для результатов парсинга</th>
                    <th>Формат файла вывода</th>
                </tr>
            </thead>
            <tbody>
                {
                    dummyData.map(parserSetting => 
                        <tr key={parserSetting.id}>
                            <td>{parserSetting.firstPageUrl}</td>
                            <td>{parserSetting.numOfPagesToParse}</td>
                            <td>{parserSetting.header}</td>
                            <td>{parserSetting.outputFileType}</td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListParserSettingsComponent