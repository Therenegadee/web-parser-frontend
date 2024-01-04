import React, { useState } from 'react';
import SidebarMenuComponent from '../SidebarMenu/SidebarMenuComponent';
import './Help.css'

const HelpComponent = () => {
  const [activeTab, setActiveTab] = useState('help');
  return (
    <div className='help-page'>
      <SidebarMenuComponent activeTab={activeTab} onTabClick={setActiveTab}/>
      <h2>Помощь</h2>
    </div>
  );
};

export default HelpComponent;