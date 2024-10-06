import React, { useState } from 'react';

// Navbar Item Component
const NavItem = ({ title, active, onClick }) => (
    <button
    onClick={onClick}
    className={`text-lg font-semibold py-2 px-4 transition-colors duration-300 ${
        active ? 'border-b-4 border-white' : 'hover:border-b-4 border-transparent'
    }`}
    >
    {title}
    </button>
);

// Components for each section
const Home = () => (
    <div>
    <h2 className="text-2xl font-semibold mb-4">Welcome to the Home Page</h2>
    <p className="text-gray-700">This is the home section of your app.</p>
    </div>
);

const ProfileInfo = () => (
    <div>
    <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
    <p className="text-gray-700">Here is some information about your profile.</p>
    </div>
);

const ProjectInfo = () => (
    <div>
    <h2 className="text-2xl font-semibold mb-4">Project Information</h2>
    <p className="text-gray-700">This section contains details about your projects.</p>
    </div>
);

const TeamAbout = () => (
    <div>
    <h2 className="text-2xl font-semibold mb-4">About the Team</h2>
    <p className="text-gray-700">Learn more about the team behind this project.</p>
    </div>
);

export {
    NavItem,
    Home,
    ProfileInfo,
    ProjectInfo,
    TeamAbout
}
