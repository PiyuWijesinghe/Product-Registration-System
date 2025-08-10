import React from "react";
import { FiEye, FiEdit2, FiTrash2, FiImage } from "react-icons/fi";

const ProductCard = ({ product, onView, onEdit, onDelete }) => {
  return (
    <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
      <div className="relative h-52 bg-gray-200 overflow-hidden">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.productName}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-150 to-gray-200">
            <div className="text-center">
              <FiImage className="text-5xl text-gray-400 mb-2 mx-auto" />
              <span className="text-gray-500 font-medium">No Image</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => onView(product._id)}
            className="bg-blue-500 hover:bg-blue-600 text-white p-2.5 rounded-full transition duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            title="View Details"
          >
            <FiEye className="w-4 h-4" />
          </button>
          <button
            onClick={() => onEdit(product)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white p-2.5 rounded-full transition duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            title="Edit Product"
          >
            <FiEdit2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(product._id, product.productName)}
            className="bg-red-500 hover:bg-red-600 text-white p-2.5 rounded-full transition duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            title="Delete Product"
          >
            <FiTrash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800 leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.productName}
          </h3>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-xs font-mono font-semibold ml-2 shrink-0">
            {product.productCode}
          </span>
        </div>

        <div className="mb-4">
          <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
            {product.category?.categoryName || "No Category"}
          </span>
        </div>

        <div className="text-2xl font-bold text-green-600 mb-4">
          Rs. {product.price?.toLocaleString() || "0"}
        </div>

        {product.description && (
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
            {product.description}
          </p>
        )}

        <div className="text-xs text-gray-500">
          Added: {new Date(product.createdAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
