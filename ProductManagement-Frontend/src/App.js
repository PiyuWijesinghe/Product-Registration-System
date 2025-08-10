import React, { useState, useEffect } from "react";
import axios from "axios";
import HomePage from "./Components/HomePage";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import MessageAlert from "./Components/MessageAlert";
import ProductsTab from "./Components/ProductTab";
import CategoriesTab from "./Components/CategoriesTab";
import ProductModal from "./Components/ProductModal";
import CategoryModal from "./Components/categoryModal";
import ViewProductModal from "./Components/ViewProductModal";
import Footer from "./Components/Footer";
import LoadingScreen from "./Components/LoadingScreen";

function App() {
  // Home Page State
  const [showHomePage, setShowHomePage] = useState(true);

  // State Management
  const [activeTab, setActiveTab] = useState("products");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Modal States
  const [showProductModal, setShowProductModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);
  const [viewingProduct, setViewingProduct] = useState(null);

  // Form States
  const [productForm, setProductForm] = useState({
    productCode: "",
    productName: "",
    category: "",
    price: "",
    description: "",
    image: null,
  });

  const [categoryForm, setCategoryForm] = useState({
    categoryName: "",
  });

  // Load initial data for homepage stats
  useEffect(() => {
    fetchData();
  }, []);

  // Handle get started button
  const handleGetStarted = () => {
    setShowHomePage(false);
  };

  // API Functions
  const fetchData = async () => {
    setLoading(true);
    try {
      const [productsRes, categoriesRes] = await Promise.all([
        axios.get("http://localhost:5000/api/products"),
        axios.get("http://localhost:5000/api/categories"),
      ]);
      setProducts(productsRes.data);
      setCategories(categoriesRes.data);
      setError(null);
      console.log(
        "Data fetched successfully:",
        productsRes.data.length,
        "products",
        categoriesRes.data.length,
        "categories"
      );
    } catch (err) {
      const errorMsg =
        "Failed to connect to backend. Make sure server is running on port 5000.";
      setError(errorMsg);
      console.error("API Error:", err.message);
    } finally {
      setLoading(false);
    }
  };

  // Utility Functions
  const showMessage = (message, type = "success") => {
    if (type === "success") {
      setSuccess(message);
      setError(null);
      setTimeout(() => setSuccess(null), 3000);
    } else {
      setError(message);
      setSuccess(null);
      setTimeout(() => setError(null), 5000);
    }
  };

  // Product CRUD Operations
  const handleProductSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    Object.keys(productForm).forEach((key) => {
      if (productForm[key] !== null && productForm[key] !== "") {
        formData.append(key, productForm[key]);
      }
    });

    try {
      if (editingProduct) {
        await axios.put(
          `http://localhost:5000/api/products/${editingProduct._id}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        showMessage(
          `Product "${productForm.productName}" updated successfully!`
        );
      } else {
        await axios.post("http://localhost:5000/api/products", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        showMessage(`Product "${productForm.productName}" added successfully!`);
      }

      closeProductModal();
      fetchData();
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Failed to save product";
      showMessage(`Error: ${errorMessage}`, "error");
    } finally {
      setLoading(false);
    }
  };

  const openProductModal = (product = null) => {
    if (product) {
      setEditingProduct(product);
      setProductForm({
        productCode: product.productCode,
        productName: product.productName,
        category: product.category._id,
        price: product.price,
        description: product.description || "",
        image: null,
      });
    } else {
      setEditingProduct(null);
      setProductForm({
        productCode: "",
        productName: "",
        category: "",
        price: "",
        description: "",
        image: null,
      });
    }
    setShowProductModal(true);
  };

  const closeProductModal = () => {
    setShowProductModal(false);
    setEditingProduct(null);
    setProductForm({
      productCode: "",
      productName: "",
      category: "",
      price: "",
      description: "",
      image: null,
    });
  };

  const handleDeleteProduct = async (id, name) => {
    if (
      window.confirm(
        `Are you sure you want to delete "${name}"?\n\nThis action cannot be undone.`
      )
    ) {
      setLoading(true);
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        showMessage(`Product "${name}" deleted successfully!`);
        fetchData();
      } catch (err) {
        showMessage("Failed to delete product", "error");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleViewProduct = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/products/${id}`
      );
      setViewingProduct(response.data);
      setShowViewModal(true);
    } catch (err) {
      showMessage("Failed to load product details", "error");
    }
  };

  // Category CRUD Operations
  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingCategory) {
        await axios.put(
          `http://localhost:5000/api/categories/${editingCategory._id}`,
          categoryForm
        );
        showMessage(
          `Category "${categoryForm.categoryName}" updated successfully!`
        );
      } else {
        await axios.post("http://localhost:5000/api/categories", categoryForm);
        showMessage(
          `Category "${categoryForm.categoryName}" added successfully!`
        );
      }

      closeCategoryModal();
      fetchData();
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Failed to save category";
      showMessage(`Error: ${errorMessage}`, "error");
    } finally {
      setLoading(false);
    }
  };

  const openCategoryModal = (category = null) => {
    if (category) {
      setEditingCategory(category);
      setCategoryForm({ categoryName: category.categoryName });
    } else {
      setEditingCategory(null);
      setCategoryForm({ categoryName: "" });
    }
    setShowCategoryModal(true);
  };

  const closeCategoryModal = () => {
    setShowCategoryModal(false);
    setEditingCategory(null);
    setCategoryForm({ categoryName: "" });
  };

  const handleDeleteCategory = async (id, name) => {
    const productsCount = products.filter((p) => p.category._id === id).length;

    if (productsCount > 0) {
      showMessage(
        `Cannot delete "${name}". ${productsCount} product(s) are using this category.`,
        "error"
      );
      return;
    }

    if (
      window.confirm(
        `Are you sure you want to delete category "${name}"?\n\nThis action cannot be undone.`
      )
    ) {
      setLoading(true);
      try {
        await axios.delete(`http://localhost:5000/api/categories/${id}`);
        showMessage(`Category "${name}" deleted successfully!`);
        fetchData();
      } catch (err) {
        const errorMessage =
          err.response?.data?.message || "Failed to delete category";
        showMessage(`Error: ${errorMessage}`, "error");
      } finally {
        setLoading(false);
      }
    }
  };

  // Show home page first
  if (showHomePage) {
    return (
      <HomePage
        onGetStarted={handleGetStarted}
        products={products}
        categories={categories}
      />
    );
  }

  // Render loading screen while fetching initial data
  if (loading && products.length === 0) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header products={products} categories={categories} />

      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        products={products}
        categories={categories}
      />

      <MessageAlert
        success={success}
        error={error}
        setSuccess={setSuccess}
        setError={setError}
      />

      <main className="container mx-auto px-4 py-8">
        {activeTab === "products" && (
          <ProductsTab
            products={products}
            loading={loading}
            fetchData={fetchData}
            openProductModal={openProductModal}
            handleViewProduct={handleViewProduct}
            handleDeleteProduct={handleDeleteProduct}
          />
        )}

        {activeTab === "categories" && (
          <CategoriesTab
            categories={categories}
            products={products}
            loading={loading}
            fetchData={fetchData}
            openCategoryModal={openCategoryModal}
            handleDeleteCategory={handleDeleteCategory}
          />
        )}
      </main>

      {/* Modals */}
      {showProductModal && (
        <ProductModal
          isOpen={showProductModal}
          onClose={closeProductModal}
          onSubmit={handleProductSubmit}
          editingProduct={editingProduct}
          productForm={productForm}
          setProductForm={setProductForm}
          categories={categories}
          loading={loading}
        />
      )}

      {showCategoryModal && (
        <CategoryModal
          isOpen={showCategoryModal}
          onClose={closeCategoryModal}
          onSubmit={handleCategorySubmit}
          editingCategory={editingCategory}
          categoryForm={categoryForm}
          setCategoryForm={setCategoryForm}
          loading={loading}
        />
      )}

      {showViewModal && viewingProduct && (
        <ViewProductModal
          isOpen={showViewModal}
          onClose={() => setShowViewModal(false)}
          product={viewingProduct}
          onEdit={openProductModal}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
