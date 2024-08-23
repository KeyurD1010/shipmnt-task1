import React from "react";

function BottomComponent() {
  const handleSave = () => {
    // Add your save logic here
    console.log("Saved to database");
  };

  const handleCancel = () => {
    // Add your cancel logic here
    console.log("Cancelled");
  };

  return (
    <div className="flex justify-end space-x-4 p-4 bg-gray-100">
      <button
        onClick={handleCancel}
        className="bg-gray-500 text-white font-semibold py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
      >
        Cancel
      </button>
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
      >
        Save
      </button>
    </div>
  );
}

export default BottomComponent;
