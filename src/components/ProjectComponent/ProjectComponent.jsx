import React, { useState } from 'react';
import SidebarMenuComponent from '../SidebarMenu/SidebarMenuComponent';
import './Project.css'

const ProjectComponent = () => {
  const [activeTab, setActiveTab] = useState('projects');
  
  return (
    <div className='projects-page'>
      <SidebarMenuComponent activeTab={activeTab} onTabClick={setActiveTab}/>
    </div>
  );
  
};

export default ProjectComponent;