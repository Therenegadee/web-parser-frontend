import React, { useState } from 'react';
import SidebarMenuComponent from '../SidebarMenu/SidebarMenuComponent';
import './Settings.css'

const SettingsComponent = () => {
  const [activeTab, setActiveTab] = useState('settings');

  return (
    <div className='settings-page'>
      <SidebarMenuComponent activeTab={activeTab} onTabClick={setActiveTab}/>
      <h2>Настройки</h2>
    </div>
  );
};

export default SettingsComponent;