import React, { useState } from 'react';
import './ProjectTable.css';
import folderIcon from '../../assets/icons/projects/folder.svg'
import mineIcon from '../../assets/icons/projects/mining-icon.svg'

  // const dummyData = [
  //   {
  //       "id": 1,
  //       "userParserSettings": {
  //           "firstPageUrl": "https://zhongchou.modian.com/?_mpos=h_nav_discover",
  //           "numOfPagesToParse": 2,
  //           "className": "pc_ga_pro_index_17",
  //           "tagName": "a",
  //           "cssSelectorNextPage": ".next",
  //           "header": ["funds_raised", "people_support"],
  //           "elementLocators": [{
  //               "type": "XPATH",
  //               "pathToLocator": "/html/body/div[1]/div/div[3]/div[2]/div[2]/div[1]/div[1]/h3/span",
  //               "extraPointer": null
  //           },
  //           {
  //               "type": "XPATH",
  //               "pathToLocator": "/html/body/div[1]/div/div[3]/div[2]/div[2]/div[1]/div[3]/h3/span",
  //               "extraPointer": null
  //           }],
  //           "outputFileType": "XLSX"
  //       },
  //       "linkToDownloadResults": "https://link.com"
  //   },
  //   {
  //       "id": 2,
  //       "userParserSettings": {
  //           "firstPageUrl": "https://zhongchou.modian.com/?_mpos=h_nav_discover",
  //           "numOfPagesToParse": 2,
  //           "className": "pc_ga_pro_index_17",
  //           "tagName": "a",
  //           "cssSelectorNextPage": ".next",
  //           "header": ["funds_raised", "people_support"],
  //           "elementLocators": [{
  //               "type": "XPATH",
  //               "pathToLocator": "/html/body/div[1]/div/div[3]/div[2]/div[2]/div[1]/div[1]/h3/span",
  //               "extraPointer": null
  //           },
  //           {
  //               "type": "XPATH",
  //               "pathToLocator": "/html/body/div[1]/div/div[3]/div[2]/div[2]/div[1]/div[3]/h3/span",
  //               "extraPointer": null
  //           }],
  //           "outputFileType": "XLSX"
  //       },
  //       "linkToDownloadResults": "https://link.com"
  //   },
  // ];

const ProjectTableComponent = ({ items, handleItemClick }) => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleFolder = (folderId) => {
    if (expandedItems.includes(folderId)) {
      setExpandedItems(expandedItems.filter((id) => id !== folderId));
    } else {
      setExpandedItems([...expandedItems, folderId]);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Имя</th>
          <th>Тэги</th>
          <th>Тип</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <tr onClick={() => toggleFolder(item.id)}>
              <td className='icon-cell'>
                <img src={folderIcon} alt="Folder Icon" className="table-icon" />
              </td>
              <td>{item.name}</td>
              <td>Тэги {item.name.toLowerCase()}</td>
              <td>Папка</td>
            </tr>
            {expandedItems.includes(item.id) &&
              item.items &&
              item.items.map((subItem) => (
                <tr key={subItem.id} onClick={() => handleItemClick(subItem)}>
                  <td className='icon-cell'>
                    <img src={mineIcon} alt="Mining Icon" className="table-icon" />
                  </td>
                  <td>{subItem.name}</td>
                  <td>Тэги {subItem.name.toLowerCase()}</td>
                  <td>Парсинг</td>
                </tr>
              ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectTableComponent;