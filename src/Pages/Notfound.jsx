import React from 'react';

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-4">
      {/* Spinner */}
      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin mb-6"></div>

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
        Website is under maintenance
      </h1>

      {/* Subtext */}
      <p className="text-base sm:text-lg md:text-xl font-medium text-center">
        Please come back after some time
      </p>
    </div>
  );
};

export default Notfound;
