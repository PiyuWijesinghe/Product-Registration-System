import React from "react";

const ViewProductModal = ({ isOpen, onClose, product, onEdit }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fadeIn">
        <div className="sticky top-0 bg-white rounded-t-3xl border-b p-8 z-10">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Product Details
              </h2>
              <p className="text-gray-600 mt-1">
                Complete information about this product
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-4xl font-light transition duration-200 hover:bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center"
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Product Image */}
          <div className="w-full h-80 bg-gray-100 rounded-2xl overflow-hidden shadow-inner">
            {product.imageUrl ? (
              <img
                src={product.imageUrl}
                alt={product.productName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="text-center">
                  <span className="text-8xl opacity-40">□</span>
                  <p className="text-gray-500 mt-4 text-xl font-medium">
                    No Image Available
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Product Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider block mb-2">
                  Product Name
                </label>
                <p className="text-2xl font-bold text-gray-800">
                  {product.productName}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider block mb-2">
                  Product Code
                </label>
                <p className="text-xl font-mono bg-white text-gray-800 px-4 py-2 rounded-lg inline-block border-2 border-gray-200">
                  {product.productCode}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider block mb-2">
                  Category
                </label>
                <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full font-bold text-lg">
                  {product.category?.categoryName || "No Category"}
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-200">
                <label className="text-sm font-bold text-green-600 uppercase tracking-wider block mb-2">
                  Price
                </label>
                <p className="text-4xl font-bold text-green-700">
                  Rs. {product.price?.toLocaleString() || "0"}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider block mb-2">
                  Added Date
                </label>
                <p className="text-lg text-gray-800 font-semibold">
                  {new Date(product.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider block mb-2">
                  Last Updated
                </label>
                <p className="text-lg text-gray-800 font-semibold">
                  {new Date(product.updatedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          {product.description && (
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-blue-200">
              <label className="text-sm font-bold text-blue-600 uppercase tracking-wider block mb-4">
                Description
              </label>
              <p className="text-gray-800 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-8 border-t-2 border-gray-100">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 px-8 rounded-xl transition duration-200 font-semibold text-lg"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEdit(product);
              }}
              className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 px-8 rounded-xl hover:from-yellow-600 hover:to-orange-600 transition duration-200 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span className="text-xl">✎</span>
              <span>Edit Product</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProductModal;
