import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import SidebarMenuComponent from '../SidebarMenu/SidebarMenuComponent';
import DropdownMenuComponent from './DropdownMenuComponent';
import ParsingPresetViewComponent from './ParsingPresetViewComponent';
import ProjectTableComponent from './ProjectTableComponent';
// import ParserService from '../../services/ParserService'
import './Project.css'

const ProjectComponent = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [folders, setFolders] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    setFolders([
      {
        id: 1,
        name: 'Папка 1',
        items: [
          {
            id: 11,
            name: 'Парсинг 1',
            userParserSettings: {
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
            linkToDownloadResults: 'https://link.com',
          },
          {
            id: 12,
            name: 'Парсинг 2',
            userParserSettings: {
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
            linkToDownloadResults: 'https://link.com',
          },
        ],
      },
      {
        id: 2,
        name: 'Папка 2',
        items: [
          {
            id: 21,
            name: 'Парсинг 3',
            userParserSettings: {
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
            linkToDownloadResults: 'https://link.com',
          },
          {
            id: 22,
            name: 'Парсинг 4',
            userParserSettings: {
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
            linkToDownloadResults: 'https://link.com',
          },
        ],
      },
    ]);
  }, []);

  const navigator = useNavigate();
    
    // const [parserResult, setParserResult] = useState([]);

    // useEffect(() => {
    //     ParserService.parserResultList().then((response) => {
    //         setParserResult(response.data)
    //     }).catch(error => {
    //         console.error(error);
    //     })
    // }, []);

    // function createNewParsingQuery() {
    //     navigator('/parser/create')
    // }
    
  
  return (
    <div className='projects-page'>
      <SidebarMenuComponent activeTab={activeTab} onTabClick={setActiveTab} />
      <div className='project-info'>
        <div className='header-container'>
          <h2>Проекты</h2>
          <DropdownMenuComponent />
        </div>
        <ProjectTableComponent items={folders} handleItemClick={handleItemClick} />
        {selectedItem && <ParsingPresetViewComponent itemData={selectedItem} />}
      </div>
    </div>
);
};


export default ProjectComponent;