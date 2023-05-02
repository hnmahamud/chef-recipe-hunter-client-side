import React from "react";
import loadingGif from "../../assets/loading.gif";

// Loading page
const LoadingSpinner = () => {
  // Loading animation
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Lottie Animation */}
      <img className="h-56" src={loadingGif} alt="" />
    </div>
  );
};

export default LoadingSpinner;
