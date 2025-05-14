import React from "react";


type TabProps = {
    activeTab: "employees" | "leaves" | "announcements";
    setActiveTab: (tab: "employees" | "leaves" | "announcements") => void;
  };

export const Tab = ({ activeTab, setActiveTab }: TabProps) => {
 

  return (
    <div className="text-gray-700">
    <div className="flex space-x-4 bg-gray-100 p-2 rounded-full w-fit mx-auto mb-6">
      {["employees", "leaves", "announcements"].map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-5 py-2 rounded-full font-medium transition-colors duration-200 ${
              isActive
                ? "bg-blue-600 text-white shadow"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        );
      })}
    </div>
  </div>
  );
};
