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

  const renderItems = (items, level = 0) => {
    return items.map((item) => (
      <React.Fragment key={item.id}>
        {/* <tr onClick={() => toggleFolder(item.id)}> */}
        <tr onClick={() => (item.items ? toggleFolder(item.id) : handleItemClick(item))}>
          <td style={{ paddingLeft: `${20 + level * 10}px` }} >
            {item.items ? (
              <img src={folderIcon} alt="Folder Icon" className="table-icon" />
            ) : (
              <img src={mineIcon} alt="Mining Icon" className="table-icon" />
            )}
            {item.name}
          </td>
          <td>Тэги {item.name.toLowerCase()}</td>
          <td>{item.items ? 'Папка' : 'Парсинг'}</td>
        </tr>
        {expandedItems.includes(item.id) && item.items && (
          <React.Fragment>{renderItems(item.items, level + 1)}</React.Fragment>
        )}
      </React.Fragment>
    ));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Тэги</th>
          <th>Тип</th>
        </tr>
      </thead>
      <tbody>{renderItems(items)}</tbody>
    </table>

  );
};

export default ProjectTableComponent;