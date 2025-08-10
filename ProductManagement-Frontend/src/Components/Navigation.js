import React from "react";

const Navigation = ({ activeTab, setActiveTab, products, categories }) => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex">
          <button
            onClick={() => setActiveTab("products")}
            className={`flex-1 sm:flex-none py-4 px-8 font-semibold text-sm border-b-3 transition-all duration-300 flex items-center justify-center space-x-2 ${
              activeTab === "products"
                ? "border-blue-500 text-blue-600 bg-gradient-to-t from-blue-50 to-transparent"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            <span>Products</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-bold min-w-[24px]">
              {products.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab("categories")}
            className={`flex-1 sm:flex-none py-4 px-8 font-semibold text-sm border-b-3 transition-all duration-300 flex items-center justify-center space-x-2 ${
              activeTab === "categories"
                ? "border-purple-500 text-purple-600 bg-gradient-to-t from-purple-50 to-transparent"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            <span>Categories</span>
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-bold min-w-[24px]">
              {categories.length}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
