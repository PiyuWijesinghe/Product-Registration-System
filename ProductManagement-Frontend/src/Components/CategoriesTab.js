import React from "react";
import CategoryCard from "./CategoryCard";

const CategoriesTab = ({
  categories,
  products,
  loading,
  fetchData,
  openCategoryModal,
  handleDeleteCategory,
}) => {
  return (
    <div className="animate-fadeIn">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Category Management
          </h2>
          <p className="text-gray-600">
            Organize your products with categories
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
            onClick={() => openCategoryModal()}
            className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-xl hover:from-purple-600 hover:to-pink-700 transition duration-200 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
          >
            <span className="text-xl">+</span>
            <span>Add Category</span>
          </button>
        </div>
      </div>

      {categories.length === 0 ? (
        <div className="bg-white rounded-3xl shadow-xl p-16 text-center">
          <div className="text-8xl mb-8 opacity-60">◦</div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            No Categories Yet
          </h3>
          <p className="text-xl text-gray-600 mb-10 max-w-md mx-auto leading-relaxed">
            Create categories to organize your products effectively and improve
            navigation
          </p>
          <button
            onClick={() => openCategoryModal()}
            className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-10 py-4 rounded-2xl hover:from-purple-600 hover:to-pink-700 transition duration-200 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Create Your First Category
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const productCount = products.filter(
              (p) => p.category._id === category._id
            ).length;
            return (
              <CategoryCard
                key={category._id}
                category={category}
                productCount={productCount}
                onEdit={openCategoryModal}
                onDelete={handleDeleteCategory}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CategoriesTab;
