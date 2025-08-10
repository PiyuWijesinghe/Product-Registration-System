import React from "react";

const CategoryCard = ({ category, productCount, onEdit, onDelete }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-l-4 border-purple-500 hover:border-pink-500">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
            {category.categoryName}
          </h3>
          <div className="flex items-center space-x-2 text-gray-600">
            <span className="text-lg">□</span>
            <span className="font-medium">
              {productCount} {productCount === 1 ? "product" : "products"}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600 font-medium">Created:</span>
          <span className="text-gray-700 font-semibold">
            {new Date(category.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
