import React from "react";

const MessageAlert = ({ success, error, setSuccess, setError }) => {
  return (
    <>
      {/* Success Message */}
      {success && (
        <div className="container mx-auto px-4 mt-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400 p-4 rounded-r-xl shadow-lg animate-fadeIn">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <p className="text-green-800 font-semibold flex-1">{success}</p>
              <button
                onClick={() => setSuccess(null)}
                className="text-green-600 hover:text-green-800 font-bold text-xl ml-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-green-100 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="container mx-auto px-4 mt-6">
          <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-400 p-4 rounded-r-xl shadow-lg animate-fadeIn">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">!</span>
              </div>
              <p className="text-red-800 font-semibold flex-1">{error}</p>
              <button
                onClick={() => setError(null)}
                className="text-red-600 hover:text-red-800 font-bold text-xl ml-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-100 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageAlert;
