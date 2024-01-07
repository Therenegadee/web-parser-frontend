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
  const userName = 'Имя';

  const handleItemClick = (item) => {
    if (selectedItem && selectedItem.id === item.id) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
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
                "name": "funds_raised",
                "type": "XPATH",
                "pathToLocator": "/html/body/div[1]/div/div[3]/div[2]/div[2]/div[1]/div[1]/h3/span",
                "extraPointer": null
            },
            {
                "name": "people_support",
                "type": "XPATH",
                "pathToLocator": "/html/body/div[1]/div/div[3]/div[2]/div[2]/div[1]/div[3]/h3/span",
                "extraPointer": null
            }],
            },
            parsingHistory: [
              {
                'date': '2024-04-02T00:00:00.000Z',
                'linkToDownloadResults': 'https://link.com',
                "outputFileType": "CSV"
              },
              {
                'date': '2024-03-31T11:00:00.000Z',
                'linkToDownloadResults': 'https://link.com',
                "outputFileType": "XLSX"
              }
          ]
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
                "name": "funds_raised",
                "type": "XPATH",
                "pathToLocator": "/html/body/div[1]/div/div[3]/div[2]/div[2]/div[1]/div[1]/h3/span",
                "extraPointer": null
            },
            {
                "name": "people_support",
                "type": "XPATH",
                "pathToLocator": "/html/body/div[1]/div/div[3]/div[2]/div[2]/div[1]/div[3]/h3/span",
                "extraPointer": null
            }],
            },
            parsingHistory: [
              {
                'date': '2024-04-02T00:00:00.000Z',
                'linkToDownloadResults': 'https://link.com',
                "outputFileType": "XLSX"
              },
              {
                'date': '2024-03-31T11:00:00.000Z',
                'linkToDownloadResults': 'https://link.com',
                "outputFileType": "CSV"
              }
          ]
          },
          {
            id: 3,
            name: 'Папка 3',
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
                    "name": "funds_raised",
                    "type": "XPATH",
                    "pathToLocator": "/html/body/div[1]/div/div[3]/div[2]/div[2]/div[1]/div[1]/h3/span",
                    "extraPointer": null
                },
                {
                    "name": "people_support",
                    "type": "XPATH",
                    "pathToLocator": "/html/body/div[1]/div/div[3]/div[2]/div[2]/div[1]/div[3]/h3/span",
                    "extraPointer": null
                }],
                },
                parsingHistory: [
                  {
                    'date': '2024-04-02T00:00:00.000Z',
                    'linkToDownloadResults': 'https://link.com',
                    "outputFileType": "XLSX"
                  },
                  {
                    'date': '2024-03-31T11:00:00.000Z',
                    'linkToDownloadResults': 'https://link.com',
                    "outputFileType": "CSV"
                  }
              ]
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
                    "name": "funds_raised",
                    "type": "XPATH",
                    "pathToLocator": "/html/body/div[1]/div/div[3]/div[2]/div[2]/div[1]/div[1]/h3/span",
                    "extraPointer": null
                },
                {
                    "name": "people_support",
                    "type": "XPATH",
                    "pathToLocator": "/html/body/div[1]/div/div[3]/div[2]/div[2]/div[1]/div[3]/h3/span",
                    "extraPointer": null
                }],
                },
                parsingHistory: [
                  {
                    'date': '2024-04-02T00:00:00.000Z',
                    'linkToDownloadResults': 'https://link.com',
                    "outputFileType": "XLSX"
                  },
                  {
                    'date': '2024-03-31T11:00:00.000Z',
                    'linkToDownloadResults': 'https://link.com',
                    "outputFileType": "XLSX"
                  }
              ]
              },
            ],
          }
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
                "name": "funds_raised",
                "type": "XPATH",
                "pathToLocator": "/html/body/div[1]/div/div[3]/div[2]/div[2]/div[1]/div[1]/h3/span",
                "extraPointer": null
            },
            {
                "name": "people_support",
                "type": "XPATH",
                "pathToLocator": "/html/body/div[1]/div/div[3]/div[2]/div[2]/div[1]/div[3]/h3/span",
                "extraPointer": null
            }],
            },
            parsingHistory: [
              {
                'date': '2024-04-02T00:00:00.000Z',
                'linkToDownloadResults': 'https://link.com',
                "outputFileType": "XLSX"
              },
              {
                'date': '2024-03-31T11:00:00.000Z',
                'linkToDownloadResults': 'https://link.com',
                "outputFileType": "XLSX"
              }
          ]
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
                "name": "funds_raised",
                "type": "XPATH",
                "pathToLocator": "/html/body/div[1]/div/div[3]/div[2]/div[2]/div[1]/div[1]/h3/span",
                "extraPointer": null
            },
            {
                "name": "people_support",
                "type": "XPATH",
                "pathToLocator": "/html/body/div[1]/div/div[3]/div[2]/div[2]/div[1]/div[3]/h3/span",
                "extraPointer": null
            }],
            },
            parsingHistory: [
              {
                'date': '2024-04-02T00:00:00.000Z',
                'linkToDownloadResults': 'https://link.com',
                "outputFileType": "XLSX"
              },
              {
                'date': '2024-03-31T11:00:00.000Z',
                'linkToDownloadResults': 'https://link.com',
                "outputFileType": "CSV"
              }
          ]
          },
        ],
      },
    ]);
  }, []);


  
  // const navigator = useNavigate();
    
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
          <h2>/home/{userName}/Документы/<span className='highlighted-text'>Проекты</span></h2>
          <DropdownMenuComponent 
          folders={folders}
          setFolders={setFolders}
          />
        </div>
        <ProjectTableComponent items={folders} handleItemClick={handleItemClick} />
        {selectedItem && 
          <ParsingPresetViewComponent 
            itemData={selectedItem} 
            onClose={() => setSelectedItem(null)}
          />
        }
      </div>
    </div>
);
};


export default ProjectComponent;