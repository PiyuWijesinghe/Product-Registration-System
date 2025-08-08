# 📦 Product Registration Management System

A modern, efficient, and user-friendly React application for managing products and inventory. Built with React.js, featuring a beautiful UI with Tailwind CSS and professional icons from React Icons.

## ✨ Features

### 🏠 Home Page

- **Modern Landing Page** - Professional hero section with animated elements
- **Live Stats** - Real-time display of products and categories count
- **Smooth Animations** - Beautiful fade-in effects and transitions
- **Responsive Design** - Works perfectly on all devices

### 📦 Product Management

- **CRUD Operations** - Create, Read, Update, Delete products
- **Image Upload** - Support for product images with preview
- **Category Organization** - Organize products into categories
- **Search & Filter** - Easy product discovery
- **Detailed View** - Complete product information modal

### 🏷️ Category Management

- **Category CRUD** - Full category management system
- **Product Count** - Shows how many products are in each category
- **Protected Deletion** - Prevents deleting categories with products
- **Real-time Updates** - Instant synchronization

### 🎨 User Interface

- **Clean Design** - Modern and professional interface
- **React Icons** - Consistent vector icons throughout
- **Loading States** - Smooth loading animations
- **Success/Error Messages** - User-friendly notifications
- **Mobile Responsive** - Optimized for all screen sizes

## 🚀 Technologies Used

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Icons**: React Icons (Feather Icons)
- **HTTP Client**: Axios
- **State Management**: React Hooks
- **Animations**: CSS Transitions & Animations

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**
- **npm**
- **Backend API** running on `http://localhost:5000`

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/product-management-system.git
cd Product-Registration-System
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Required Packages

```bash
npm install react-icons axios
```

### 4. Start the Development Server

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── App.js                 # Main application component
├── index.js              # Application entry point
├── index.css             # Global styles and Tailwind imports
└── Components/
    ├── HomePage.js           # Landing page component
    ├── Header.js            # Application header
    ├── Navigation.js        # Tab navigation
    ├── MessageAlert.js      # Success/error notifications
    ├── LoadingScreen.js     # Loading state component
    ├── Footer.js            # Application footer
    ├── ProductTab.js        # Products tab content
    ├── ProductCard.js       # Individual product card
    ├── ProductModal.js      # Add/Edit product modal
    ├── ViewProductModal.js  # Product details modal
    ├── CategoriesTab.js     # Categories tab content
    ├── CategoryCard.js      # Individual category card
    └── categoryModal.js     # Add/Edit category modal
```

## 🔧 Configuration

### Backend API Endpoints

The application expects the following API endpoints:

```javascript
// Products
GET    /api/products       # Get all products
POST   /api/products       # Create new product
GET    /api/products/:id   # Get product by ID
PUT    /api/products/:id   # Update product
DELETE /api/products/:id   # Delete product

// Categories
GET    /api/categories     # Get all categories
POST   /api/categories     # Create new category
PUT    /api/categories/:id # Update category
DELETE /api/categories/:id # Delete category
```

REACT_APP_API_URL=http://localhost:3000

## 🎮 Usage

### Getting Started

1. **Home Page** - View the landing page with system overview
2. **Get Started** - Click "Get Started Now" to enter the management system

### Managing Products

1. **View Products** - Navigate to the Products tab
2. **Add Product** - Click "Add Product" button
3. **Edit Product** - Click the edit icon on any product card
4. **View Details** - Click the eye icon for detailed view
5. **Delete Product** - Click the trash icon (with confirmation)

### Managing Categories

1. **View Categories** - Navigate to the Categories tab
2. **Add Category** - Click "Add Category" button
3. **Edit Category** - Click the edit icon on category cards
4. **Delete Category** - Only possible if no products use the category

## 🎨 Component Details

### ProductCard Component

```javascript
// Features:
- Product image display with fallback
- Hover animations and effects
- Action buttons (View, Edit, Delete)
- Product information display
- Price formatting with localization
```

### HomePage Component

```javascript
// Features:
- Hero section with animated background
- Live stats counter animation
- Responsive design
- Call-to-action button
```

### Modal Components

```javascript
// Features:
- Form validation
- Loading states
- File upload support
- Responsive design
- Smooth animations
```
