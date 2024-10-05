import React, { useState } from 'react';
import { NavItem, Home, ProfileInfo, ProjectInfo, TeamAbout } from './components/Navigation';

function App() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('Home');

  // Function to render the content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Home />;
      case 'Profile Info':
        return <ProfileInfo />;
      case 'Project Info':
        return <ProjectInfo />;
      case 'Team About':
        return <TeamAbout />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-500 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-left space-x-8">
          <NavItem
            title="Home"
            active={activeTab === 'Home'}
            onClick={() => setActiveTab('Home')}
          />
          <NavItem
            title="Profile Info"
            active={activeTab === 'Profile Info'}
            onClick={() => setActiveTab('Profile Info')}
          />
          <NavItem
            title="Project Info"
            active={activeTab === 'Project Info'}
            onClick={() => setActiveTab('Project Info')}
          />
          <NavItem
            title="Team About"
            active={activeTab === 'Team About'}
            onClick={() => setActiveTab('Team About')}
          />
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex justify-center items-center h-full">
        <div className="bg-white shadow-lg rounded-lg p-8 w-3/4 max-w-2xl">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
