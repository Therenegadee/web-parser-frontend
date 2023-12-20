import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
// import ParserService from './services/ParserService'

const ListParserResultsComponent = () => {
    const navigator = useNavigate();

    const dummyData = [
        {
            "id": 1,
            "userParserSettings": {
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
            "linkToDownloadResults": "https://link.com"
        },
        {
            "id": 2,
            "userParserSettings": {
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
            "linkToDownloadResults": "https://link.com"
        },
    ];
    
    // const [parserResult, setParserResult] = useState([]);
    // useEffect(() => {
    //     ParserService.parserResultList().then((response) => {
    //         setParserResult(response.data)
    //     }).catch(error => {
    //         console.error(error);
    //     })
    // }, []);

    function createNewParsingQuery() {
        navigator('/parser/create')
    }
  return (
    <div className='container'>
        <h2 className='text-center'>Список параметров настроек парсинга</h2>
        <button className='btn btn-primary mb-2' onClick={createNewParsingQuery}>Создать новый пресет парсинга</button>
        <table className='table table-stripped table-bordered'>
            <thead>
                <tr>
                    <th>Ссылка для загрузки результатов</th>
                    <th>Кол-во спарсенных страниц</th>
                </tr>
            </thead>
            <tbody>
                {
                    // parserResult.map(parserResult => 
                    dummyData.map(parserResult =>
                        <tr key={parserResult.id}>
                            <td>{parserResult.linkToDownloadResults}</td>
                            <td>{parserResult.userParserSettings.numOfPagesToParse}</td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListParserResultsComponent