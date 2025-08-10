import React from "react";

const ProductModal = ({
  isOpen,
  onClose,
  onSubmit,
  editingProduct,
  productForm,
  setProductForm,
  categories,
  loading,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fadeIn">
        <div className="sticky top-0 bg-white rounded-t-3xl border-b p-8 z-10">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                {editingProduct ? "Edit Product" : "Add New Product"}
              </h2>
              <p className="text-gray-600 mt-1">
                {editingProduct
                  ? "Update product information"
                  : "Fill in the details below to add a new product"}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                Product Code *
              </label>
              <input
                type="text"
                required
                value={productForm.productCode}
                onChange={(e) =>
                  setProductForm({
                    ...productForm,
                    productCode: e.target.value.toUpperCase(),
                  })
                }
                className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 font-mono"
                placeholder="e.g. MOB001"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                Product Name *
              </label>
              <input
                type="text"
                required
                value={productForm.productName}
                onChange={(e) =>
                  setProductForm({
                    ...productForm,
                    productName: e.target.value,
                  })
                }
                className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                placeholder="e.g. iPhone 15 Pro"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                Category *
              </label>
              <select
                required
                value={productForm.category}
                onChange={(e) =>
                  setProductForm({
                    ...productForm,
                    category: e.target.value,
                  })
                }
                className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white"
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.categoryName}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                Price (Rs.) *
              </label>
              <input
                type="number"
                required
                min="0"
                step="0.01"
                value={productForm.price}
                onChange={(e) =>
                  setProductForm({ ...productForm, price: e.target.value })
                }
                className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                placeholder="e.g. 150000"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
              Description
            </label>
            <textarea
              value={productForm.description}
              onChange={(e) =>
                setProductForm({
                  ...productForm,
                  description: e.target.value,
                })
              }
              rows="4"
              className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-none"
              placeholder="Enter a detailed description of your product..."
            ></textarea>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
              Product Image
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors duration-200">
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setProductForm({
                    ...productForm,
                    image: e.target.files[0],
                  })
                }
                className="w-full"
                id="image-upload"
              />
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
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
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-xl hover:from-blue-600 hover:to-purple-700 transition duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center space-x-2">
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Processing...</span>
                </span>
              ) : editingProduct ? (
                "Update Product"
              ) : (
                "Add Product"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
