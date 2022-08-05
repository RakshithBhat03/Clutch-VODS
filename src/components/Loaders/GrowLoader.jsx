import React from "react";

const GrowLoader = ({ width = "w-8", height = "h-8" }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div
        className={`spinner-grow inline-block ${width} ${height} bg-current rounded-full opacity-0`}
        role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export { GrowLoader };
