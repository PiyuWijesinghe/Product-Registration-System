import React from "react";

const CategoryModal = ({
  isOpen,
  onClose,
  onSubmit,
  editingCategory,
  categoryForm,
  setCategoryForm,
  loading,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl animate-fadeIn">
        <div className="p-8 border-b">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                {editingCategory ? "Edit Category" : "Add New Category"}
              </h2>
              <p className="text-gray-600 mt-1">
                {editingCategory
                  ? "Update category information"
                  : "Create a new category for your products"}
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

        <form onSubmit={onSubmit} className="p-8 space-y-8">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
              Category Name *
            </label>
            <input
              type="text"
              required
              value={categoryForm.categoryName}
              onChange={(e) =>
                setCategoryForm({ categoryName: e.target.value })
              }
              className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200"
              placeholder="e.g. Mobile Phones, Laptop, Home Appliances"
            />
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-8 border-t-2 border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 px-8 rounded-xl transition duration-200 font-semibold text-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white py-4 px-8 rounded-xl hover:from-purple-600 hover:to-pink-700 transition duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center space-x-2">
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Processing...</span>
                </span>
              ) : editingCategory ? (
                "Update Category"
              ) : (
                "Add Category"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryModal;
