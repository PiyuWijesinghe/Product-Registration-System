import React from "react";
import ProductCard from "./ProductCard";

const ProductsTab = ({
  products,
  loading,
  fetchData,
  openProductModal,
  handleViewProduct,
  handleDeleteProduct,
}) => {
  return (
    <div className="animate-fadeIn">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Product Management
          </h2>
          <p className="text-gray-600">
            Add, edit, view, and delete your products
          </p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          <button
            onClick={fetchData}
            disabled={loading}
            className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl transition duration-200 flex items-center justify-center space-x-2 font-medium shadow-sm hover:shadow-md disabled:opacity-50"
          >
            <span className={loading ? "animate-spin" : ""}>⟲</span>
            <span>Refresh</span>
          </button>
          <button
            onClick={() => openProductModal()}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl hover:from-green-600 hover:to-emerald-700 transition duration-200 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
          >
            <span className="text-xl">+</span>
            <span>Add Product</span>
          </button>
        </div>
      </div>

      {products.length === 0 ? (
        <div className="bg-white rounded-3xl shadow-xl p-16 text-center">
          <div className="text-8xl mb-8 opacity-60">□</div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            No Products Yet
          </h3>
          <p className="text-xl text-gray-600 mb-10 max-w-md mx-auto leading-relaxed">
            Start building your inventory by adding your first product to the
            system
          </p>
          <button
            onClick={() => openProductModal()}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-2xl hover:from-blue-600 hover:to-purple-700 transition duration-200 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Add Your First Product
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onView={handleViewProduct}
              onEdit={openProductModal}
              onDelete={handleDeleteProduct}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsTab;
