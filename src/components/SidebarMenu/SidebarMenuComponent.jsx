import React,  { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SidebarMenu.css';

const SidebarMenuComponent = ({ activeTab, onTabClick }) => {
  const location = useLocation();
  const [profileId, setProfileId] = useState('1');
  const [profileData, setProfileData] = useState({});
  const [iconPath, setIconPath] = useState(null);

  useEffect(() => {
    // Запрос к бэку
    const fetchProfileData = async () => {
    //   try {
    //     // замена 'backend-url' 
    //     const response = await fetch(`backend-url/profiles/${profileId}`);
    //     const data = await response.json();
    //     setProfileData(data);
    //   } catch (error) {
    //     console.error('Error fetching profile data:', error);
    //   }
    // };

    const mockProfileData = {
      name: 'Имя', 
      status: 'Статус', 
      iconId: 9,
    };
    setProfileData(mockProfileData);
  };

    if (profileId) {
      fetchProfileData();
      loadIcon(profileData.iconId);
    }
  }, [profileId, profileData.iconId]);

  const loadIcon = async (iconId) => {
    try {
      const iconModule = await import(`../../assets/icons/profile/profile-icon-${iconId}.svg`);
      setIconPath(iconModule.default);
    } catch (error) {
      console.error('Error loading icon:', error);
      setIconPath(null);
    }
  };

  return (
    <div className="sidebar-menu">
      <div className="profile-info">
        {profileData && iconPath && (
          <>
            <div className="profile-icon-circle">
              <img src={iconPath} alt="Profile Icon" />
            </div>
            <div className="profile-details">
              <div className="profile-name">{profileData.name}</div>
              <div className="profile-status">{profileData.status}</div>
            </div>
          </>
        )}
      </div>

      <Link
        to="/projects"
        className={`sidebar-menu-item ${activeTab === 'projects' ? 'active' : ''}`}
      >
        Проекты
      </Link>

      <Link
        to="/settings"
        className={`sidebar-menu-item ${activeTab === 'settings' ? 'active' : ''}`}
      >
        Настройки
      </Link>

      <Link
        to="/help"
        className={`sidebar-menu-item ${activeTab === 'help' ? 'active' : ''}`}
      >
        Помощь
      </Link>
    </div>
  );
};

export default SidebarMenuComponent;
