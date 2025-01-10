import React, { useState } from 'react';
import { NavLink} from 'react-router-dom' 

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('mca');

  return (
    <div className="max-w-3xl mx-auto p-4 flex justify-center items-center">
      <div className="flex space-x-4">
        
        <NavLink to="/"
          className={`py-2 px-4 text-lg font-semibold ${
            activeTab === 'mca' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('mca')}
        >
          MCA
        </NavLink>
        <NavLink to="/MBA"
          className={`py-2 px-4 text-lg font-semibold ${
            activeTab === 'mba' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('mba')}
        >
          MBA
        </NavLink>
      </div>

      </div>
  );
};

export default Tabs;
