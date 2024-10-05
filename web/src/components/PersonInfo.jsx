import React from 'react';
import { FaLinkedin } from 'react-icons/fa'; // LinkedIn icon

const PersonInfo = ({ image, fullName, role, url }) => {
  return (
    <div className="flex items-center bg-white p-6 shadow-lg rounded-lg max-w-2xl mx-auto">
      {/* Left: Image */}
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={fullName}
          className="w-32 h-32 object-cover rounded-full"
        />
      </div>

      {/* Right: Information */}
      <div className="ml-6">
        <h2 className="text-2xl font-bold text-gray-800">{fullName}</h2>
        <p className="text-gray-600 mt-2">Role: {role}</p>

        {/* LinkedIn Icon */}
        <div className="mt-4">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 text-3xl hover:text-blue-800 transition duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonInfo;
