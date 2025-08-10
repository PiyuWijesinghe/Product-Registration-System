import React from "react";

const Header = ({ products, categories }) => {
  return (
    <header className="bg-white shadow-xl border-b border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Product Registration System
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              {products.length} Products | {categories.length} Categories
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
