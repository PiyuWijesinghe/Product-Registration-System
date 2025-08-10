import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-gray-100 mt-16 shadow-lg">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between text-center lg:text-left space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-semibold">
                System Status: Online
              </span>
            </div>
            <div className="text-gray-600">
              Last Updated: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
