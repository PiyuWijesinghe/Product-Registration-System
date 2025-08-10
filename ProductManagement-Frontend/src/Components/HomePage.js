import React, { useState, useEffect } from "react";

const HomePage = ({ onGetStarted, products, categories }) => {
  const [stats, setStats] = useState({ products: 0, categories: 0 });

  // Animate stats counter
  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 50;
      const productIncrement = products.length / steps;
      const categoryIncrement = categories.length / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        setStats({
          products: Math.min(
            Math.floor(productIncrement * step),
            products.length
          ),
          categories: Math.min(
            Math.floor(categoryIncrement * step),
            categories.length
          ),
        });

        if (step >= steps) {
          clearInterval(timer);
          setStats({
            products: products.length,
            categories: categories.length,
          });
        }
      }, duration / steps);
    };

    if (products.length > 0 || categories.length > 0) {
      animateStats();
    }
  }, [products.length, categories.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section Only */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-500"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl mb-6 animate-bounce">
                <span className="text-4xl font-bold text-white">P</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Product Registration
              </span>
              <br />
              <span className="text-slate-800">Management System</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed animate-fadeInUp delay-300">
              Modern, efficient, and user-friendly solution for managing your
              products and inventory.
              <br className="hidden md:block" />
              Streamline your business operations with our comprehensive
              management tools.
            </p>

            {/* Stats */}
            <div className="flex justify-center space-x-12 mb-12 animate-fadeInUp delay-500">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">
                  {stats.products}
                </div>
                <div className="text-slate-600 font-medium">
                  Products Managed
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600">
                  {stats.categories}
                </div>
                <div className="text-slate-600 font-medium">
                  Categories Created
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600">100%</div>
                <div className="text-slate-600 font-medium">
                  Uptime Guarantee
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={onGetStarted}
              className="group relative inline-flex items-center justify-center px-12 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 animate-fadeInUp delay-700"
            >
              <span className="relative z-10">Get Started Now</span>
              <span className="ml-3 text-2xl group-hover:translate-x-1 transition-transform">
                →
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
